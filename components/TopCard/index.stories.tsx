import React from "react";
import { storiesOf } from "@storybook/react-native";
import styled from "styled-components";
import TopCard from ".";

storiesOf("Compornent", module).add("TopCard", () => (
  <Container>
    <TopCard balance={1000} />
  </Container>
));

const Container = styled.View`
  flex: 0.5;
  justify-content: center;
  align-items: center;
`;
