import React from "react";
import styled from "styled-components/native";

interface RoundShopIconProps {
  source: string;
}

function RoundShopIcon({ source }: RoundShopIconProps) {
  return (
    <Container>
      <ShopIcon source={require("../../assets/icon.png")} />
    </Container>
  );
}

const Container = styled.View`
  position: absolute;
  width: 100;
  height: 100;
  border-radius: 100;
  background-color: #fff;
  border: 1px solid #aaa;
  align-items: center;
  justify-content: center;
`;

const ShopIcon = styled.Image`
  width: 90;
  height: 90;
  border-radius: ${90 / 2};
`;

export default RoundShopIcon;
