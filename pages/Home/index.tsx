import React from "react";
import TopCard from "../../components/TopCard";
import PurchaseList from "../../components/PurchaseList";
import { useEffect, useDispatch, useSelector } from "app/lib/hooks";

import styled from "styled-components/native";
import Wallpeper from "app/components/Wallpaper";

import { PurchaseType, HistoryType } from "app/models/Purchase";
import { thunkActionCreators } from "app/middleware/thunkAction";
import { RootState } from "app/modules";

function Home() {
  const transactions = useSelector(
    (state: Pick<RootState, "transactions">) => state.transactions.transactions
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunkActionCreators.fetchTransactions());
  }, []);

  return (
    <Wallpeper>
      <HomeContainer>
        <CardContainer>
          <TopCard balance={200} />
        </CardContainer>
        {transactions.length > 0 && (
          <>
            <HistoryHeader>最近のお支払い</HistoryHeader>
            <HistoryContainer>
              <PurchaseList purchase={transactions[0]} />
            </HistoryContainer>
          </>
        )}
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
