import { IconType } from "../IconType";

export interface ProfileType {
  username: string;
  email: string;
  displayName: string | null;
  balance: number;
  icon?: IconType;
}
