import { combineReducers } from "redux";

import * as Transactions from "./Transactions";

export interface RootState {
  transactions: Transactions.State;
}

export const initialState = {
  transactions: Transactions.initialState
};

export const rootReducer = combineReducers({
  transactions: Transactions.reducer
});

export const actionCreator = {
  ...Transactions.actionCreators
};
