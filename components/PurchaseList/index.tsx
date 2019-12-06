import React from "react";
import { Dimensions } from "react-native";
import Status, { StatusType } from "./status";

import styled from "styled-components/native";

function PurchaseList() {
  return (
    <ListContainer>
      <ShopContainer>
        <ShopIcon source={require("../../assets/icon.png")} />
        <PurchaseContents>
          <PurchaseDate allowFontScaling={false}>2019年10月24日</PurchaseDate>
          <PayeeName allowFontScaling={false}>hogeShopに支払い</PayeeName>
        </PurchaseContents>
      </ShopContainer>
      <Amount allowFontScaling={false}>
        300<Unit allowFontScaling={false}>円</Unit>
      </Amount>
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

const PurchaseContents = styled.View`
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

const Amount = styled.Text`
  font-size: 16;
  font-weight: 500;
  align-self: flex-end;
`;

const Unit = styled.Text`
  font-size: 12;
`;

export default PurchaseList;
