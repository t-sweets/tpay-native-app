import { IconType } from "../IconType";

export interface MerchantType {
  name: string;
  icon?: MerchantIconType;
}

export type MerchantIconType = IconType;
