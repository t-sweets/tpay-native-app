import { ProfileType } from "app/models/Profile";

interface Payload {
  profile: ProfileType;
}

export interface SetProfileAction {
  type: "SET_PROFILE";
  payload: Payload;
}

export function setProfileCreator(payload: Payload): SetProfileAction {
  return {
    payload,
    type: "SET_PROFILE"
  };
}
