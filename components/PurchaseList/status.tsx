import React from "react";
import { View, Text } from "react-native";

import styled from "styled-components/native";

export enum StatusType {
  Completed
}

interface StatusProps {
  type: StatusType;
}

export default function Status({ type }: StatusProps) {
  return (
    <Container type={type}>
      <Text>{type === StatusType.Completed ? "支払い完了" : "まだだよ"}</Text>
    </Container>
  );
}

const Container = styled.View<{ type: StatusType }>`
  background-color: ${({ type }) =>
    type === StatusType.Completed ? "#00ff00" : "red"};
`;
