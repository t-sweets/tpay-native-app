import React from "react";
import { formatDateYMDByLang } from "app/lib/utils";
import styled from "styled-components/native";

interface Props {
  date: Date;
  shopName: string;
}

export default function Overview({ date, shopName }: Props) {
  const dateStr = formatDateYMDByLang(date);

  return (
    <Container>
      <PurchaseDate allowFontScaling={false}>{dateStr}</PurchaseDate>
      <PayeeName allowFontScaling={false}>{shopName}に支払い</PayeeName>
    </Container>
  );
}

const Container = styled.View`
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
  align-self: stretch;
  justify-content: flex-start;
`;

const PurchaseDate = styled.Text`
  flex: 0.3;
  font-size: 10;
  padding-bottom: 5px;
`;

const PayeeName = styled.Text`
  flex: 0.5;
  font-size: 16;
  font-weight: 500;
`;
