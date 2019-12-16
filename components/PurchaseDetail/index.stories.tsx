import React from "react";
import { storiesOf } from "@storybook/react-native";
import styled from "styled-components/native";
import { number, withKnobs } from "@storybook/addon-knobs";
import PurchaseDetail from ".";
import { PayStatusType, PurchaseType } from "app/models/typs";

const stories = storiesOf("Compornent", module);

stories.addDecorator(withKnobs).add("PurchaseDetail", () => {
  const purchase: PurchaseType = {
    id: "aaaaaa",
    shop: {
      name: "hogehoge"
    },
    type: PayStatusType.Paid,
    amount: 1000,
    timestamp: new Date()
  };

  return (
    <Container>
      <PurchaseDetail purchase={purchase} />
    </Container>
  );
});

const Container = styled.View`
  flex: 0.5;
  justify-content: center;
  align-items: center;
`;
