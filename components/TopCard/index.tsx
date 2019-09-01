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
      <Text style={styles.titleHeader}>{"あなたの残高"}</Text>
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
  titleHeader: {
    color: "gray",
    fontSize: 22,
    margin: 20
  }
});

export default TopCard;
