import { MerchantType } from "./Marchant";

export enum PayStatusType {
  Checkout = "checkout", // 支払い
  Cancel = "Cancel", // 返金
  Deposit = "deposit" // チャージ
}

export interface PurchaseType {
  id: string;
  merchant: MerchantType;
  amount: number;
  deleted: boolean;
  type: PayStatusType;
  createdTime: Date;
}
