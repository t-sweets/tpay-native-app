import React from "react";
import { storiesOf } from "@storybook/react-native";
import styled from "styled-components/native";
import { number, withKnobs } from "@storybook/addon-knobs";
import AccountPane from ".";
import { PayStatusType, PurchaseType } from "app/models/Purchase";
import { View } from "react-native";

import Exchange from "app/components/icons/Exchange";
import Home from "app/components/icons/Home";
import People from "app/components/icons/People";
import Receipt from "app/components/icons/Receipt";
import Transfer from "app/components/icons/Transfer";

const storiesAll = storiesOf("Foundation|Icon", module);
storiesAll.addDecorator(withKnobs);

storiesAll.add("Icons", () => (
  <List>
    <IconGroup>
      <Exchange />
      <Home />
      <People />
      <Receipt />
      <Transfer />
    </IconGroup>
  </List>
));

function IconGroup({ children }: { children: React.ReactNode }) {
  return (
    <IconContainer>
      {React.Children.map(children, child => (
        <IconWrap>
          <Icon>{child}</Icon>
          <IconLabel>{(child as any)?.type?.name}</IconLabel>
        </IconWrap>
      ))}
    </IconContainer>
  );
}

const bluePrintColor = "rgba(150, 200, 255, 0.5)";

const IconContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const IconWrap = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2px;
`;

const Icon = styled.View`
  border: 1px solid ${bluePrintColor};

  & > * {
    display: block;
  }
`;

const IconLabel = styled.Text`
  font-size: 12px;
  line-height: 16px;
  height: 16px;
  color: ${bluePrintColor};
`;

const List = styled.SafeAreaView`
  padding: 36px 40px 40px;
  display: flex;
`;
