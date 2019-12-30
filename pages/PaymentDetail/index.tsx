import React from "react";
import { RootState } from "app/modules";
import { useSelector } from "react-redux";
import { useMemo } from "app/lib/hooks";

import PurchaseDetail from "app/components/PurchaseDetail";
import Wallpeper from "app/components/Wallpaper";

import styled from "styled-components/native";

interface Props {
  uuid: string;
}

function PaymentDetail({ uuid }: Props) {
  const transactions = useSelector(
    (state: Pick<RootState, "transactions">) => state.transactions
  );

  const purchase = useMemo(() => transactions.find(t => t.id === uuid), [
    transactions
  ]);

  return (
    <Wallpeper>
      <Container>
        <PurchaseDetail purchase={purchase} />
      </Container>
    </Wallpeper>
  );
}

const Container = styled.View`
  align-items: center;
  margin: 12px;
`;

export default PaymentDetail;
