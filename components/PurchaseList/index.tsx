import React from "react";
import { Dimensions } from "react-native";

import { ShopType, PurchaseType } from "models/typs";
import { formatDateYMDByLang } from "app/lib/utils";

import styled from "styled-components/native";
import Overview from "./Overview";
import Amount from "./Amount";

export interface PurcahseItemProps {
  purchase: PurchaseType;
}

function PurchaseList({ purchase }: PurcahseItemProps) {
  return (
    <ListContainer>
      <ShopContainer>
        <ShopIcon source={require("../../assets/icon.png")} />
        <Overview shopName={purchase.shop.name} date={purchase.timestamp} />
      </ShopContainer>
      <Amount price={purchase.amount}></Amount>
    </ListContainer>
  );
}

const ListContainer = styled.View`
  width: ${Dimensions.get("screen").width * 0.9};
  height: 80;
  padding: 10px;
  background-color: #fafafa;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 10px #ccc;
  border-radius: 5px;
`;

const ShopContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
`;

const ShopIcon = styled.Image`
  width: 60;
  height: 60;
`;

export default PurchaseList;
