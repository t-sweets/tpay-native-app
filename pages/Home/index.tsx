import React from "react";
import TopCard from "../../components/TopCard";
import PurchaseList from "../../components/PurchaseList";

import styled from "styled-components/native";
import { PurchaseType, HistoryType } from "app/models/typs";
import Wallpeper from "app/components/Wallpaper";

function Home() {
  const purchase: PurchaseType = {
    id: "aaaaaa",
    shop: {
      name: "hogehoge"
    },
    type: HistoryType.Paid,
    amount: 1000,
    timestamp: new Date()
  };

  return (
    <Wallpeper>
      <HomeContainer>
        <CardContainer>
          <TopCard balance={200} />
        </CardContainer>
        <HistoryHeader>最近のお支払い</HistoryHeader>
        <HistoryContainer>
          <PurchaseList purchase={purchase} />
        </HistoryContainer>
      </HomeContainer>
    </Wallpeper>
  );
}

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
