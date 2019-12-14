import React from "react";
import styled from "styled-components/native";

interface WallpeperProps {
  children?: React.ReactNode;
}

function Wallpeper({ children }: WallpeperProps) {
  return (
    <HomeBackground source={require("app/assets/background.png")}>
      {children}
    </HomeBackground>
  );
}

const HomeBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export default Wallpeper;
