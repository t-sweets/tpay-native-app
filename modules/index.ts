import { combineReducers } from "redux";

import * as Transactions from "./Transactions";
import * as AuthToken from "./AuthToken";
import * as Profile from "./Profile";

export type RootState = AuthToken.State & Transactions.State & Profile.State;

export const initialState = {
  ...AuthToken.initialState,
  ...Transactions.initialState,
  ...Profile.initialState
};

export const rootReducer = combineReducers({
  authToken: AuthToken.reducer,
  transactions: Transactions.reducer,
  profile: Profile.reducer
});

export const actionCreator = {
  ...AuthToken.actionCreators,
  ...Transactions.actionCreators,
  ...Profile.actionCreators
};
