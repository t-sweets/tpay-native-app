import {
  GetTransactionsAction,
  getTransactionsCreator
} from "./GetTransactions";
import { TransactionsType } from "./type";

export type Action = GetTransactionsAction;

export type State = {
  transactions: TransactionsType;
};

export const initialState = {
  transactions: []
};

export function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case "GET_TRANSACTIONS":
      return {
        transactions: action.payload
      };
    default:
      return state;
  }
}

export const actionCreators = {
  getTransactionsCreator
};
