import {
  SetTransactionsAction,
  setTransactionsCreator
} from "./SetTransactions";
import {
  PrepareGetTransactionsAction,
  prepareGetTransactions
} from "./PrepareStatus";
import { TransactionsType, RequestStatus } from "./type";

export type Action = SetTransactionsAction | PrepareGetTransactionsAction;

export type State = {
  status: RequestStatus;
  data: TransactionsType;
};

export const initialState = {
  status: RequestStatus.None,
  data: []
};

export function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case "PREPARE_GET_TRANSACTIONS":
      return {
        ...state,
        status: RequestStatus.Requesting
      };
    case "SET_TRANSACTIONS":
      return {
        ...state,
        status: RequestStatus.Success,
        data: action.payload.transactions
      };
    default:
      return state;
  }
}

export const actionCreators = {
  prepareGetTransactions,
  setTransactionsCreator
};
