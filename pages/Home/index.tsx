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
        <HistoryContainer>
          <PurchaseList />
        </HistoryContainer>
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

const HistoryContainer = styled.View`
  flex-direction: column;
  align-items: center;
  margin: 0px 15px;
`;

const HistoryHeader = styled.Text`
  color: #666;
  font-size: 16;
  margin: 5px 25px;
  align-self: flex-start;
`;

export default Home;
