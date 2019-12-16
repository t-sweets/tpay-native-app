import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";
import styled from "styled-components/native";
import PurchaseDetail from "app/components/PurchaseDetail";
import { PayStatusType } from "app/models/typs";
import Wallpeper from "app/components/Wallpaper";

interface Props {
  uuid: string;
}

function PaymentDetail({ uuid }: Props) {
  const purchase = {
    id: uuid,
    shop: {
      name: "hogehoge"
    },
    type: PayStatusType.Paid,
    amount: 1000,
    timestamp: new Date()
  };

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
