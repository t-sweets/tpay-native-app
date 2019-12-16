import React from "react";
import { Dimensions } from "react-native";

import { PurchaseType } from "app/models/Purchase";

import styled from "styled-components/native";
import Overview from "./Overview";
import Amount from "./Amount";
import { Actions } from "react-native-router-flux";
import { adjustImagePath } from "app/lib/utils";

export interface PurcahseItemProps {
  purchase: PurchaseType;
}

function PurchaseList({ purchase }: PurcahseItemProps) {
  const pushDetail = () => {
    Actions.paymentDetail({
      uuid: purchase.id
    });
  };
  const shopIconPath = adjustImagePath(purchase.merchant.icon.image);

  return (
    <ListContainer onPress={pushDetail}>
      <ShopContainer>
        <ShopIcon source={shopIconPath} />
        <Overview
          shopName={purchase.merchant.name}
          date={purchase.createdTime}
        />
      </ShopContainer>
      <Amount price={purchase.amount}></Amount>
    </ListContainer>
  );
}

const ListContainer = styled.TouchableOpacity`
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
