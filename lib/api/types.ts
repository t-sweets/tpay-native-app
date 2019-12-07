export interface RequestQuery {
  [key: string]:
    | string
    | number
    | readonly string[]
    | readonly number[]
    | undefined;
}

export type JsonObject = object & (JsonArrayInterface | JsonObjectInterface);

type JsonElement = string | number | boolean | null;

interface JsonObjectInterface {
  readonly [key: string]: JsonElement | JsonObject;
}

interface JsonArrayInterface {
  readonly length: number;
  readonly [key: number]: JsonElement | JsonObject;
}
