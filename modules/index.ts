import { combineReducers } from "redux";

import * as Transactions from "./Transactions";
import * as AuthToken from "./AuthToken";
import * as Profile from "./Profile";

export interface RootState {
  authToken: AuthToken.State;
  transactions: Transactions.State;
  profile: Profile.State;
}

export const initialState = {
  authToken: AuthToken.initialState,
  transactions: Transactions.initialState,
  profile: Profile.initialState
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
