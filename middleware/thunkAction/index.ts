import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

import { RootState } from "modules";

export type ThunkActionType = ThunkAction<void, RootState, undefined, Action>;

export const thunkActionCreators = {};
