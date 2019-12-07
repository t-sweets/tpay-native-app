export interface MerchantType {
  name: string;
  icon?: MerchantIconType;
}

export interface MerchantIconType {
  id: string;
  image: string;
  width: 400;
  height: 400;
}
