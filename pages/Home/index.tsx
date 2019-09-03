import React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import TopCard from "../../components/TopCard";
import PurchaseList from "../../components/PurchaseList";

function Home() {
  return (
    <ImageBackground
      source={require("../../assets/background.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.topCard}>
          <TopCard balance={200} />
        </View>
        <Text style={styles.historyHeader}>最近のお支払い</Text>
        <View style={styles.history}>
          <PurchaseList />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center"
  },
  background: {
    width: "100%",
    height: "100%"
  },
  topCard: {
    marginTop: 65,
    marginBottom: 55
  },
  history: {
    // marginHorizontal: 10,
    alignItems: "center",
    flexDirection: "column"
  },
  historyHeader: {
    color: "#666",
    fontSize: 18,
    marginHorizontal: 30,
    marginBottom: 10,
    textAlign: "left",
    marginRight: "auto"
  }
});

export default Home;
