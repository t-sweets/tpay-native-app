import {
  SetTransactionsAction,
  setTransactionsCreator
} from "./SetTransactions";
import { TransactionsType } from "./type";

export type Action = SetTransactionsAction;

export type State = {
  transactions: TransactionsType;
};

export const initialState = {
  transactions: []
};

export function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case "SET_TRANSACTIONS":
      return {
        transactions: action.payload
      };
    default:
      return state;
  }
}

export const actionCreators = {
  getTransactionsCreator: setTransactionsCreator
};
