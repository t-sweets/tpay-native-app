import { ProfileType } from "app/models/Profile";

export type ProfileApiData = Omit<ProfileType, "displayName"> & {
  display_name: string | null;
};

export const applyApiDataToProfileType = (raw: ProfileApiData) => {
  const { display_name, ...extract } = raw;
  return {
    ...extract,
    displayName: display_name
  } as ProfileType;
};
