interface Payload {
  authToken: string | null;
}

interface SetAuthTokenAction {
  type: "SET_AUTH_TOKEN";
  payload: Payload;
}

function setAuthToken(payload: Payload): SetAuthTokenAction {
  return {
    payload,
    type: "SET_AUTH_TOKEN"
  };
}

export type Action = SetAuthTokenAction;

export type State = string;

export const initialState = "";

export function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case "SET_AUTH_TOKEN":
      return action.payload.authToken ?? "";
    default:
      return state;
  }
}

export const actionCreators = {
  setAuthToken
};
