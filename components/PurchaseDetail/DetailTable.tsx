import React from "react";
import styled from "styled-components/native";

interface Props {
  uuid: string;
  shopName: string;
  amount: number;
}

function DetailTable({ uuid, shopName, amount }: Props) {
  return (
    <Container>
      <Row>
        <Cell>店舗名</Cell>
        <Cell>{shopName}</Cell>
      </Row>
      <Row>
        <Cell>決済番号</Cell>
        <Cell>{uuid}</Cell>
      </Row>
      <Row>
        <Cell>支払い金額</Cell>
        <Cell bold>{`${Math.abs(amount).toLocaleString()}円`}</Cell>
      </Row>
    </Container>
  );
}

const Container = styled.View`
  width: 300;
  margin: 12px;
`;

const Row = styled.View`
  margin: 1px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Cell = styled.Text<{ bold?: boolean }>`
  font-size: 10px;
  font-weight: ${({ bold }) => (bold ? "700" : "400")};
`;

export default DetailTable;
