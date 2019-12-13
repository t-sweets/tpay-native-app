import { Action, AnyAction } from "redux";
import { ThunkAction as ReduxThunkAction } from "redux-thunk";

import { fetchTransactions } from "./FetchTransactions";

import { RootState } from "modules";
import ApiClientImpl, { ApiClient } from "app/lib/api";
import { Dispatch } from "react";

export type ThunkActionType = ReduxThunkAction<
  void,
  RootState,
  undefined,
  Action
>;

export const thunkActionCreators = {
  fetchTransactions
};

export const getToken = (root: Pick<RootState, "authToken">) =>
  root.authToken || "";

export const getClient = (): ApiClient => new ApiClientImpl({});

export const getAuthClient = (authToken: string): ApiClient =>
  new ApiClientImpl({ authToken });

export interface TypedAction<A extends string, T> {
  type: A;
  payload: T;
}

export type UnknownAction = TypedAction<"", undefined>;

export type ThunkAction<R, S, A extends Action = AnyAction> = (
  dispatch: Dispatch<A>,
  getState: () => S
) => R;
