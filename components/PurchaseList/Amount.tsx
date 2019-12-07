import React from "react";
import styled from "styled-components/native";

interface Props {
  price: number;
}

export default function Amount({ price }: Props) {
  return (
    <Container allowFontScaling={false}>
      {price}
      <Unit allowFontScaling={false}>円</Unit>
    </Container>
  );
}

const Container = styled.Text`
  font-size: 16;
  font-weight: 500;
  align-self: flex-end;
`;

const Unit = styled.Text`
  font-size: 12;
`;
