import { MerchantType } from "./Marchant";

export enum HistoryType {
  Checkout = "checkout", // 支払い
  Cancel = "Cancel", // 返金
  Deposit = "deposit" // チャージ
}

export interface PurchaseType {
  id: string;
  merchant: MerchantType;
  amount: number;
  deleted: boolean;
  type: HistoryType;
  createdTime: Date;
}
