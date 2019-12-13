import { PurchaseType } from "app/models/Purchase";

export type TransactionsType = PurchaseType[];

export enum RequestStatus {
  None,
  Requesting,
  Success,
  Error
}
