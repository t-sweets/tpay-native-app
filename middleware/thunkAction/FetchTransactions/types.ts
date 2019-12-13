import { MerchantType, PurchaseType } from "app/models/Purchase";
import { TransactionsType } from "app/modules/Transactions/type";

export type TransactionApiData = Omit<PurchaseType, "createdTime"> & {
  created_time: string;
};

export const applyApiDataToPurchaseType = (raw: TransactionApiData) => {
  const { created_time, ...extract } = raw;
  return {
    ...extract,
    amount: raw.amount,
    createdTime: new Date(raw.created_time)
  } as PurchaseType;
};
