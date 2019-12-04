import React from "react";
import {
  Text,
  StyleSheet,
  ImageBackground,
  View,
  Dimensions
} from "react-native";

import styled from "styled-components";

interface TopCardProps {
  balance: number;
}

function TopCard({ balance }: TopCardProps) {
  return (
    <CardView
      imageStyle={{ borderRadius: 10 }}
      source={require("../../assets/t-pay-card.png")}
    >
      <Text style={styles.title}>{"あなたの残高"}</Text>
      <View style={styles.balanceView}>
        <Text style={styles.balanceText}>{balance}</Text>
        <Text style={styles.balanceUnit}>{"円"}</Text>
      </View>
    </CardView>
  );
}

const CardView = styled.ImageBackground`
  width: ${Dimensions.get("screen").width * 0.55 * 1.618};
  height: ${Dimensions.get("screen").width * 0.55};
  flex-direction: column;
  align-items: center;

  box-shadow: 0px 0px 10px #ccc;
`;

const styles = StyleSheet.create({
  title: {
    color: "gray",
    fontSize: 22,
    marginTop: 20
  },
  balanceView: {
    flexDirection: "row",
    alignItems: "center"
  },
  balanceText: {
    fontSize: 45,
    fontWeight: "500",
    lineHeight: 140,
    margin: 2
  },
  balanceUnit: {
    fontSize: 18,
    margin: 2,
    lineHeight: 135
  }
});

export default TopCard;
