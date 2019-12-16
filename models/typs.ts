export enum PayStatusType {
  Paid = "Paid",
  Cancel = "Cancel"
}

export interface PurchaseType {
  id: string;
  shop: ShopType;
  type: PayStatusType;
  amount: number;
  timestamp: Date;
}

export interface ShopType {
  name: string;
}
