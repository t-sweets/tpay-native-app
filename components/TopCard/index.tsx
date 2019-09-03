import React from "react";
import {
  Text,
  StyleSheet,
  ImageBackground,
  View,
  Dimensions
} from "react-native";

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
    width: Dimensions.get("screen").width * 0.55 * 1.618,
    height: Dimensions.get("screen").width * 0.55,
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
