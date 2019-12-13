import { BaseError } from "make-error";
import { Alert } from "react-native";

export class ApiError<T = unknown> extends BaseError {
  readonly name = "PixivApiError";

  readonly body: T;

  constructor(message: string, body: T) {
    super(message);
    this.body = body;
  }
}

export class HttpError extends BaseError {
  readonly name = "HttpError";

  readonly code: number;

  constructor(
    statusCode: number,
    statusText: string,
    readonly apiError?: ApiError<void>
  ) {
    super(
      `${statusCode}: ${statusText}${
        apiError !== undefined ? ` (${apiError.message})` : ""
      }`
    );
    this.code = statusCode;
  }
}

export class RequestError extends BaseError {
  readonly name = "RequestError";

  constructor(method: string, url: string, status: number, extra?: string) {
    super(`Status ${status}: ${method} ${url}${extra ? ` (${extra})` : ""}`);
  }
}

export const apiErrorAlert = (message: string) => {
  Alert.alert(
    "API Fetch Error",
    message,
    [{ text: "OK", onPress: () => console.log("OK Pressed") }],
    { cancelable: false }
  );
};
