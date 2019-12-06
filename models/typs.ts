export enum HistoryType {
  Paid = "Paid",
  Cancel = "Cancel"
}

export interface PurchaseType {
  shop: ShopType;
  type: HistoryType;
  amount: number;
  timestamp: Date;
}

export interface ShopType {
  name: string;
}
