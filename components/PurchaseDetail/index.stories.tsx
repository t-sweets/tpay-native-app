import React from "react";
import { storiesOf } from "@storybook/react-native";
import styled from "styled-components/native";
import { number, withKnobs } from "@storybook/addon-knobs";
import PurchaseDetail from ".";
import { PayStatusType, PurchaseType } from "app/models/Purchase";

const stories = storiesOf("Compornent", module);

stories.addDecorator(withKnobs).add("PurchaseDetail", () => {
  const purchase: PurchaseType = {
    id: "aaaaaa",
    merchant: {
      name: "hogehoge"
    },
    type: PayStatusType.Checkout,
    amount: 1000,
    deleted: false,
    createdTime: new Date()
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
