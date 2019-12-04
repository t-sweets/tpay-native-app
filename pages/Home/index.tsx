import React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import TopCard from "../../components/TopCard";
import PurchaseList from "../../components/PurchaseList";

import styled from "styled-components/native";

function Home() {
  return (
    <HomeBackground source={require("../../assets/background.png")}>
      <HomeContainer>
        <CardContainer>
          <TopCard balance={200} />
        </CardContainer>
        <HistoryHeader>最近のお支払い</HistoryHeader>
        <View style={styles.history}>
          <PurchaseList />
        </View>
      </HomeContainer>
    </HomeBackground>
  );
}

const HomeBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

const HomeContainer = styled.View`
  flex-direction: column;
  align-items: center;
`;

const CardContainer = styled.View`
  margin-top: 65;
  margin-bottom: 55;
`;

const HistoryHeader = styled.Text`
  flex-direction: column;
  align-items: center;
`;

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
