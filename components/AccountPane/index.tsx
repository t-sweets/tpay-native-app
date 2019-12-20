import React from "react";
import styled from "styled-components/native";
import Receipt from "../icons/Receipt";
import ButtonPane from "./ButtonPane";
import Exchange from "../icons/Exchange";
import Transfer from "../icons/Transfer";
import AccountTop from "./AccountTop";
import { ImageSourcePropType } from "react-native";

interface Props {
  icon?: ImageSourcePropType;
  name: string;
}

function AccountPane({ icon, name }: Props) {
  return (
    <Container>
      <TopContainer>
        <AccountTop name={name} icon={icon} />
      </TopContainer>
      <ButtonsContainer>
        <ButtonPane icon={Receipt} size={50} label={"決済履歴"} />
        <ButtonPane icon={Exchange} size={50} label={"Felica管理"} />
        <ButtonPane icon={Transfer} size={50} label={"決済履歴"} />
      </ButtonsContainer>
    </Container>
  );
}

const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

const TopContainer = styled.View`
  margin-top: 75px;
  margin-bottom: 35px;
`;

const ButtonsContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

export default AccountPane;
