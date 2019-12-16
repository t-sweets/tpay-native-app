import React from "react";
import styled from "styled-components/native";

interface Props {
  amount: number;
}

function PriceLabel({ amount }: Props) {
  return (
    <Price>
      {amount.toLocaleString()}
      <Unit>{"円"}</Unit>
    </Price>
  );
}

const Price = styled.Text`
  font-size: 40;
  font-weight: 700;
  margin: 12px;
  letter-spacing: 1;
`;

const Unit = styled.Text`
  font-size: 16;
  letter-spacing: 5;
`;

export default PriceLabel;
