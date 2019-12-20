import React from "react";
import { storiesOf } from "@storybook/react-native";
import styled from "styled-components/native";
import PayStatusLabel from ".";
import { PayStatusType } from "app/models/Purchase";

const stories = storiesOf("Component", module);

stories.add("PayStatusLabel", () => {
  return (
    <>
      <Container>
        <PayStatusLabel type={PayStatusType.Checkout} />
      </Container>
      <Container>
        <PayStatusLabel type={PayStatusType.Cancel} />
      </Container>
    </>
  );
});

const Container = styled.SafeAreaView`
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
