import {
  SetTransactionsAction,
  setTransactionsCreator
} from "./SetTransactions";
import {
  PrepareGetTransactionsAction,
  prepareGetTransactions
} from "./PrepareStatus";
import { TransactionsType, RequestStatus } from "./type";

export type Action = SetTransactionsAction;

export type State = {
  transactions: TransactionsType;
};

export const initialState: State = {
  transactions: []
};

export function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case "SET_TRANSACTIONS":
      return {
        ...state,
        transactions: action.payload.transactions
      };
    default:
      return state;
  }
}

export const actionCreators = {
  setTransactionsCreator
};
