import React from "react";
import { PurchaseType } from "app/models/Purchase";
import styled from "styled-components/native";

import DetailTitle from "./DetailTitle";
import RoundShopIcon from "./RoundShopIcon";
import PriceLabel from "./PriceLabel";
import DetailTable from "./DetailTable";
import PayStatusLabel from "../PayStatusLabel";
import { adjustImagePath } from "app/lib/utils";

interface PurchaseDetailProps {
  purchase: PurchaseType;
}

export default function PurchaseDetail({ purchase }: PurchaseDetailProps) {
  return (
    <Container>
      <DetailBoard>
        <DetailTitle
          title={purchase.merchant.name}
          date={purchase.createdTime}
        />
        <PriceLabel amount={purchase.amount} />
        <PayStatusLabel type={purchase.type} />
        <Hr></Hr>
        <DetailTable
          uuid={purchase.id}
          shopName={purchase.merchant.name}
          amount={purchase.amount}
        />
      </DetailBoard>
      <RoundShopIcon source={adjustImagePath(purchase.merchant.icon.image)} />
    </Container>
  );
}

const Container = styled.View`
  align-items: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
`;

const DetailBoard = styled.View`
  width: 340;
  margin-top: 50px;
  padding-top: 63px;
  border-radius: 5;
  align-items: center;
  background-color: #fff;
`;

const Hr = styled.View`
  width: 330;
  height: 1;
  margin-top: 18px;
  background-color: #ccc;
`;
