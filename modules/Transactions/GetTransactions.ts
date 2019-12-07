import { TransactionsType } from "./type";

interface Payload {
  transaction: TransactionsType | null;
}

export interface GetTransactionsAction {
  type: "GET_TRANSACTIONS";
  payload: Payload;
}

export function getTransactionsCreator(
  payload: Payload
): GetTransactionsAction {
  return {
    payload,
    type: "GET_TRANSACTIONS"
  };
}
