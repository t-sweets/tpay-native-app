export interface PrepareGetTransactionsAction {
  type: "PREPARE_GET_TRANSACTIONS";
}

export function prepareGetTransactions(): PrepareGetTransactionsAction {
  return {
    type: "PREPARE_GET_TRANSACTIONS"
  };
}
