import "whatwg-fetch";

import * as types from "./types";

import pathToRegexp from "path-to-regexp";
import qs from "qs";

import { HttpError, ApiError } from "./errors";

export { HttpError, ApiError };

/**
 * There is an error in the RequestInit definition where body is missing URLSearchParams as an option.
 * It can't be fixed via augmentation so we need a subtype.
 */
interface ClientRequestInit extends Omit<RequestInit, "body"> {
  body?: URLSearchParams | Blob | BufferSource | FormData | string | null;
}

const supportMap = typeof Map === "function";
const compileCache = supportMap
  ? new Map<string, pathToRegexp.PathFunction>()
  : Object.create(null);

function getCompileCache(key: string): pathToRegexp.PathFunction | undefined {
  if (supportMap) {
    return compileCache.get(key);
  }
  return compileCache[key];
}

function setCompileCache(key: string, fn: pathToRegexp.PathFunction) {
  if (supportMap) {
    return compileCache.set(key, fn);
  }
  compileCache[key] = fn;
}

export interface ApiClient {
  get<T>(
    path: string,
    params: types.RequestQuery,
    query?: types.RequestQuery | URLSearchParams,
    fetchOptions?: ClientRequestInit
  ): Promise<T>;
  post<T>(
    path: string,
    params: types.RequestQuery,
    inputData: string | URLSearchParams | types.JsonObject | FormData | null,
    fetchOptions?: ClientRequestInit
  ): Promise<T>;
  fetch(
    path: string,
    params: types.RequestQuery,
    fetchOptions?: ClientRequestInit
  ): Promise<Response>;
  fetchWithQuery(
    path: string,
    params: types.RequestQuery,
    query: types.RequestQuery | URLSearchParams,
    fetchOptions?: ClientRequestInit
  ): Promise<Response>;
}

interface ApiClientOptions {
  authToken?: string;
}

export interface ApiClientFactory {
  new (options: ApiClientOptions): ApiClient;
}

const nativeURLSearchParams = (() => {
  try {
    return URLSearchParams.toString().includes("[native code]");
  } catch {
    return typeof URLSearchParams !== "undefined";
  }
})();

export default class ApiClientImpl implements ApiClient {
  readonly token?: string;

  constructor(options: ApiClientOptions) {
    this.token = options.authToken;
  }

  public async get<T>(
    path: string,
    params: types.RequestQuery,
    query?: types.RequestQuery | URLSearchParams,
    fetchOptions?: ClientRequestInit
  ) {
    const response = await this.fetchWithQuery(path, params, query || {}, {
      ...fetchOptions,
      headers: {
        Accept: "application/json",
        ...fetchOptions?.headers
      }
    });
    return this.parseResponse<T>(await response.json());
  }

  public async post<T>(
    path: string,
    params: types.RequestQuery,
    inputData: string | URLSearchParams | types.JsonObject | FormData | null,
    fetchOptions?: ClientRequestInit
  ) {
    const contentType =
      inputData === null
        ? undefined
        : typeof inputData === "string"
        ? "application/x-www-form-urlencoded; charset=utf-8"
        : inputData instanceof FormData
        ? undefined
        : inputData instanceof URLSearchParams
        ? nativeURLSearchParams
          ? undefined
          : "application/x-www-form-urlencoded; charset=utf-8"
        : "application/json; charset=utf-8";

    const body: Pick<ClientRequestInit, "body"> | null =
      inputData === null
        ? null
        : {
            body:
              Object.prototype.toString.call(inputData) === "[object Object]" ||
              Array.isArray(inputData)
                ? JSON.stringify(inputData)
                : (inputData as string | FormData)
          };

    const response = await this.fetch(path, params, {
      ...fetchOptions,
      method: "POST",
      headers: {
        Accept: "application/json",
        ...(contentType && { "Content-Type": contentType }),
        ...fetchOptions?.headers
      },
      ...body
    });

    return this.parseResponse<T>(await response.json());
  }

  public fetch(
    path: string,
    params: types.RequestQuery,
    fetchOptions?: ClientRequestInit
  ) {
    return this.internalFetch(path, params, undefined, fetchOptions);
  }

  public fetchWithQuery(
    path: string,
    params: types.RequestQuery,
    query: types.RequestQuery | URLSearchParams,
    fetchOptions?: ClientRequestInit
  ) {
    const queryParams =
      query instanceof URLSearchParams
        ? query
        : qs.stringify(query, {
            arrayFormat: "brackets",
            addQueryPrefix: true
          });

    return this.internalFetch(path, params, queryParams, fetchOptions);
  }

  private parseResponse<T>(apiResponse: T) {
    return apiResponse;
  }

  private async internalFetch(
    path: string,
    params: types.RequestQuery,
    queryString?: string | URLSearchParams,
    fetchOptions?: ClientRequestInit
  ) {
    let compiled = getCompileCache(path);
    if (compiled === undefined) {
      compiled = pathToRegexp.compile(path);
      setCompileCache(path, compiled);
    }

    const requestPath = compiled(params);

    const needsToken =
      (fetchOptions &&
        (fetchOptions.method || "").toUpperCase() === "POST" &&
        isSameOrigin(requestPath)) ||
      this.token;
    const needsBody =
      typeof queryString !== "string" && queryString !== undefined;

    return this.internalFetchWithoutParse(
      requestPath.concat(typeof queryString === "string" ? queryString : ""),
      augmentOptions(fetchOptions, needsToken ? this.token : undefined)
    );

    function augmentOptions(
      inputFetchOptions: ClientRequestInit | undefined,
      token?: string
    ): ClientRequestInit | undefined {
      const fetchOptions = needsBody
        ? { ...inputFetchOptions, body: queryString }
        : { ...inputFetchOptions };
      fetchOptions.headers = cloneHeaders(fetchOptions.headers);
      addHeaders(fetchOptions, [["Authorization", token]]);
      return fetchOptions;
    }
  }

  private async internalFetchWithoutParse(
    requestPath: string,
    fetchOptions?: ClientRequestInit
  ) {
    const response = await fetch(
      "https://tpay.t-lab.cs.teu.ac.jp" + requestPath,
      {
        mode: "cors",
        ...(fetchOptions as RequestInit)
      }
    );
    if (!response.ok) {
      try {
        this.parseResponse(await response.json());
      } catch (e) {
        if (e instanceof ApiError) {
          throw new HttpError(response.status, response.statusText, e);
        }
      }
      throw new HttpError(response.status, response.statusText);
    }
    return response;
  }
}

const supportsHeader = testHeaderConstructor();

function cloneHeaders(headers: RequestInit["headers"]) {
  if (headers === undefined) {
    return undefined;
  }
  if (supportsHeader) {
    return new Headers(headers);
  }
  if (isIterable(headers)) {
    return Array.from(headers);
  }
  return Object.entries(headers);
}

// NOTE: mutates init
function addHeaders(
  init: ClientRequestInit,
  headersToAdd: Iterable<[string, string | undefined]>
): void {
  const { headers } = init;
  if (headers instanceof Headers) {
    for (const [name, value] of headersToAdd) {
      if (value !== undefined) {
        headers.append(name, value);
      }
    }
  } else {
    // convert init.headers to an instance of Headers, retry
    if (supportsHeader) {
      init.headers = new Headers(headers);
      addHeaders(init, headersToAdd);
    } else {
      if (!Array.isArray(init.headers)) {
        if (init.headers === undefined) {
          init.headers = [];
        } else if (isIterable(init.headers)) {
          init.headers = Array.from(init.headers);
        } else {
          init.headers = Object.entries(init.headers);
        }
      }
      for (const [name, value] of headersToAdd) {
        if (value !== undefined) {
          init.headers.push([name, value]);
        }
      }
    }
  }
}

function isIterable(input: any): input is Iterable<any> {
  return typeof input[Symbol.iterator] === "function";
}

function testHeaderConstructor() {
  try {
    return (
      new Headers(undefined) &&
      new Headers(new Headers([["key", "value"]])).get("key") === "value"
    );
  } catch {
    return false;
  }
}

// eslint-disable-next-line no-var
var sameOriginCache = supportMap
  ? new Map<string, boolean>()
  : Object.create(null);
function getSameOriginCache(key: string): boolean | undefined {
  if (supportMap) {
    return sameOriginCache.get(key);
  }
  return sameOriginCache[key];
}

function setSameOriginCache(key: string, val: boolean) {
  if (supportMap) {
    return sameOriginCache.set(key, val);
  }
  sameOriginCache[key] = val;
}

function isSameOrigin(path: string, base = location.origin) {
  const cached = getSameOriginCache(path);
  if (cached !== undefined) {
    return cached;
  }

  const tokens = pathToRegexp.parse(path);
  if (tokens.length === 0 || typeof tokens[0] !== "string") {
    setSameOriginCache(path, false);
    return false;
  }

  const baseUrl = new URL(base);
  const pathUrl = new URL(tokens[0], base);
  const result = baseUrl.origin === pathUrl.origin;
  setSameOriginCache(path, result);
  return result;
}

function unreachable(value?: never): never {
  throw new Error(
    arguments.length === 0
      ? "unreachable"
      : `unreachable (${JSON.stringify(value)})`
  );
}
