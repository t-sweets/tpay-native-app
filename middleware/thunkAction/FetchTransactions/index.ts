import { Action } from "redux";
import { Dispatch } from "react";

import { ApiClient } from "app/lib/api";
import * as types from "./types";
import { ThunkActionType, getAuthClient } from "..";
import { apiErrorAlert } from "app/lib/api/errors";

import { actionCreator } from "app/modules";

// export const getTransactions = () => async (dispatch: Dispatch<Action>) => {
//   // 1. トークンを取得
//   // 2. fetch関数を実行
// };

export const fetchTransactions = (): ThunkActionType => async (
  dispatch: Dispatch<Action>
) => {
  const client = getAuthClient(
    "token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMDFEOTRWSFdNSDhLNUFFNzA0S0hWVzBBMkIiLCJ1c2VybmFtZSI6InNobyIsImV4cCI6MTU3NjA3OTIxMSwiZW1haWwiOiJzc2tteTEwMjQueUBnbWFpbC5jb20ifQ.ejxUAPKmgJhmjdHy6FcpdCARQfP-sJ4krBGVeO9dhz8"
  );
  try {
    const apiData = await getTransactions(client);
    const transaction = apiData.map(rowData =>
      types.applyApiDataToPurchaseType(rowData)
    );

    dispatch(actionCreator.getTransactionsCreator({ transaction }));
  } catch (e) {
    apiErrorAlert(e.toString());
  }
};

export function getTransactions(
  client: ApiClient
): Promise<types.TransactionApiData[]> {
  return client.get<types.TransactionApiData[]>("/api/v1/transactions/", {});
}
