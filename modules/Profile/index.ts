import { SetProfileAction, setProfileCreator } from "./SetProfile";
import { ProfileType } from "app/models/Profile";

export type Action = SetProfileAction;

export type State = {
  profile: ProfileType | null;
};

export const initialState: State = {
  profile: null
};

export function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case "SET_PROFILE":
      return {
        ...state,
        profile: action.payload.profile
      };
    default:
      return state;
  }
}

export const actionCreators = {
  setProfileCreator
};
