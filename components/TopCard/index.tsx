import React from "react";
import { Text, StyleSheet, ImageBackground, View } from "react-native";

interface TopCardProps {
  balance: number;
}

function TopCard({ balance }: TopCardProps) {
  return (
    <ImageBackground
      style={styles.card}
      imageStyle={{ borderRadius: 10 }}
      source={require("../../assets/t-pay-card.png")}
    >
      <Text style={styles.title}>{"あなたの残高"}</Text>
      <View style={styles.balanceView}>
        <Text style={styles.balanceText}>{balance}</Text>
        <Text style={styles.balanceUnit}>{"円"}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 360,
    height: 210,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",

    shadowColor: "#ccc",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 3,
    shadowOpacity: 1,
    elevation: 2
  },
  title: {
    color: "gray",
    fontSize: 22,
    margin: 20
  },
  balanceView: {
    flexDirection: "row",
    alignItems: "center",

    height: 100
  },
  balanceText: {
    fontSize: 45,
    fontWeight: "500",
    lineHeight: 120,
    margin: 2
  },
  balanceUnit: {
    fontSize: 18,
    margin: 2,
    lineHeight: 135
  }
});

export default TopCard;
