import React from "react";
import Svg, { Path } from "react-native-svg";
import styled from "styled-components/native";

interface Props {
  size?: number | string;
  focused?: boolean;
  color?: string;
  activeColor?: string;
}

const path = `M50 10C38.9534 10 30 18.9533 30 30V33.3333C30 44.38 38.9534 53.3333 50 53.3333C61.0467 53.3333 70 44.38 70 33.3333V30C70 18.9533 61.0467 10 50 10ZM49.9935 63.3333C36.6402 63.3333 19.5069 70.5561 14.5769 76.9661C11.5302 80.9295 14.4305 86.6667 19.4271 86.6667H80.5665C85.5631 86.6667 88.4634 80.9295 85.4167 76.9661C80.4867 70.5595 63.3469 63.3333 49.9935 63.3333Z`;

const People = ({
  size = 100,
  focused,
  color = "#999",
  activeColor = "#04a3e4"
}: Props) => {
  return (
    <IconContainer size={size}>
      <Svg width={size} height={size} viewBox="0 0 100 100">
        <Path d={path} fill={focused ? activeColor : color} />
      </Svg>
    </IconContainer>
  );
};

const IconContainer = styled.View<{ size: number | string }>`
  width: ${({ size }) => `${size}`};
  height: ${({ size }) => `${size}`};
  align-items: center;
  justify-content: center;
`;

export default People;
