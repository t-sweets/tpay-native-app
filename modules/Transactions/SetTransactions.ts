import { TransactionsType } from "./type";

interface Payload {
  transactions: TransactionsType | null;
}

export interface SetTransactionsAction {
  type: "SET_TRANSACTIONS";
  payload: Payload;
}

export function setTransactionsCreator(
  payload: Payload
): SetTransactionsAction {
  return {
    payload,
    type: "SET_TRANSACTIONS"
  };
}
