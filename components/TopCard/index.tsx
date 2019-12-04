import React from "react";
import {
  Text,
  StyleSheet,
  ImageBackground,
  View,
  Dimensions
} from "react-native";

import styled from "styled-components/native";

interface TopCardProps {
  balance: number;
}

function TopCard({ balance }: TopCardProps) {
  return (
    <CardView
      imageStyle={{ borderRadius: 10 }}
      source={require("../../assets/t-pay-card.png")}
    >
      <Title>{"あなたの残高"}</Title>
      <BalanceText>
        {balance}
        <BalanceUnit>{"円"}</BalanceUnit>
      </BalanceText>
      <View />
    </CardView>
  );
}

const CardView = styled.ImageBackground`
  width: ${Dimensions.get("screen").width * 0.45 * 1.618};
  height: ${Dimensions.get("screen").width * 0.45};
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0px 0px 10px #ccc;
`;

const Title = styled.Text`
  color: gray;
  font-size: 18;
  margin-top: 25;
`;

const BalanceText = styled.Text`
  font-size: 40;
  font-weight: 500;
  margin-bottom: 35;
  padding-left: 5;
`;

const BalanceUnit = styled.Text`
  font-size: 18;
  margin: 2px;
  padding-left: 10;
`;

export default TopCard;
