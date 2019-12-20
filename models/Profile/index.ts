import { IconType } from "../IconType";

export interface Profile {
  username: string;
  email: string;
  displayName: string | null;
  balance: number;
  icon?: IconType;
}
