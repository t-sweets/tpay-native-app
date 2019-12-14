import React from "react";
import { storiesOf } from "@storybook/react-native";
import styled from "styled-components/native";
import { number, withKnobs } from "@storybook/addon-knobs";
import TopCard from ".";

const stories = storiesOf("Compornent", module);

stories.addDecorator(withKnobs).add("TopCard", () => {
  const balance = number("Balance", 1000);

  return (
    <Container>
      <TopCard balance={balance} />
    </Container>
  );
});

const Container = styled.View`
  flex: 0.5;
  justify-content: center;
  align-items: center;
`;
