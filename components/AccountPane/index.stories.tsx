import React from "react";
import { storiesOf } from "@storybook/react-native";
import styled from "styled-components/native";
import { withKnobs, text } from "@storybook/addon-knobs";
import AccountPane from ".";
import { PayStatusType, PurchaseType } from "app/models/Purchase";
import { adjustImagePath } from "app/lib/utils";

const stories = storiesOf("Component", module);

stories.addDecorator(withKnobs).add("AccountPane", () => {
  const name = text("name", "hogehoge");

  return (
    <Container>
      <AccountPane icon={adjustImagePath()} name={name} />
    </Container>
  );
});

const Container = styled.View`
  flex: 0.5;
  justify-content: center;
  align-items: center;
`;
