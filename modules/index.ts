import { combineReducers } from "redux";

import * as Transactions from "./Transactions";
import * as AuthToken from "./AuthToken";

export interface RootState {
  authToken: AuthToken.State;
  transactions: Transactions.State;
}

export const initialState = {
  authToken: AuthToken.initialState,
  transactions: Transactions.initialState
};

export const rootReducer = combineReducers({
  authToken: AuthToken.reducer,
  transactions: Transactions.reducer
});

export const actionCreator = {
  ...AuthToken.actionCreators,
  ...Transactions.actionCreators
};
