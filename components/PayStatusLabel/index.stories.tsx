import React from "react";
import { storiesOf } from "@storybook/react-native";
import styled from "styled-components/native";
import PayStatusLabel from ".";
import { PayStatusType } from "app/models/typs";

const stories = storiesOf("Compornent", module);

stories.add("PayStatusLabel", () => {
  return (
    <>
      <Container>
        <PayStatusLabel type={PayStatusType.Paid} />
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
