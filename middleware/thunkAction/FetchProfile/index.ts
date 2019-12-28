import { Action } from "redux";
import { Dispatch } from "react";

import { ApiClient } from "app/lib/api";
import * as types from "./types";
import { ThunkActionType, getAuthClient } from "..";
import { apiErrorAlert } from "app/lib/api/errors";

import { actionCreator } from "app/modules";

export const fetchProfile = (): ThunkActionType => async (
  dispatch: Dispatch<Action>
) => {
  const client = getAuthClient(
    "token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMDFEOTRWSFdNSDhLNUFFNzA0S0hWVzBBMkIiLCJ1c2VybmFtZSI6InNobyIsImV4cCI6MTU3NjA3OTIxMSwiZW1haWwiOiJzc2tteTEwMjQueUBnbWFpbC5jb20ifQ.ejxUAPKmgJhmjdHy6FcpdCARQfP-sJ4krBGVeO9dhz8"
  );
  try {
    const apiData = await getProfile(client);
    const profile = types.applyApiDataToProfileType(apiData);

    dispatch(actionCreator.setProfileCreator({ profile }));
  } catch (e) {
    apiErrorAlert(e.toString());
  }
};

export function getProfile(client: ApiClient): Promise<types.ProfileApiData> {
  return client.get<types.ProfileApiData>("/api/v1/accounts/profile/", {});
}
