import React from "react";
import styled from "styled-components/native";
import { ImageSourcePropType } from "react-native";

interface Props {
  icon?: ImageSourcePropType;
  name: string;
}

function AccountTop({ icon, name }: Props) {
  return (
    <Container>
      <IconWrapper>
        <AccountIcon source={icon} />
      </IconWrapper>
      <NameLabel allowFontScaling={false}>{name}</NameLabel>
    </Container>
  );
}

const AccountIcon = styled.Image`
  width: 100;
  height: 100;
  border-radius: ${100 / 2};
`;

const IconWrapper = styled.View`
  border: 1px solid #01a2e5;
  border-radius: ${100 / 2};
`;

const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NameLabel = styled.Text`
  font-size: 20;
  font-weight: 700;
  margin: 10px;
`;

export default AccountTop;
