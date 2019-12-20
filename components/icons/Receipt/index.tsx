import React from "react";
import Svg, { Path } from "react-native-svg";
import styled from "styled-components/native";

interface Props {
  size?: number | string;
}

const Receipt = ({ size = 100 }: Props) => {
  return (
    <IconContainer size={size}>
      <Svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <Path
          d="M3.75 96.25V35C3.75 31.555 6.555 28.75 10 28.75H90C93.445 28.75 96.25 31.555 96.25 35V96.25H3.75Z"
          fill="#DFF0FE"
        />
        <Path
          d="M90 30C92.7575 30 95 32.2425 95 35V95H5V35C5 32.2425 7.2425 30 10 30H90ZM90 27.5H10C5.8575 27.5 2.5 30.8575 2.5 35V97.5H97.5V35C97.5 30.8575 94.1425 27.5 90 27.5Z"
          fill="#4788C7"
        />
        <Path d="M83.75 56.25H16.25V66.25H83.75V56.25Z" fill="#98CCFD" />
        <Path
          d="M82.5 57.5V65H17.5V57.5H82.5ZM85 55H15V67.5H85V55Z"
          fill="#98CCFD"
        />
        <Path d="M23.75 78.75H16.25V86.25H23.75V78.75Z" fill="#98CCFD" />
        <Path
          d="M22.5 80V85H17.5V80H22.5ZM25 77.5H15V87.5H25V77.5Z"
          fill="#98CCFD"
        />
        <Path d="M38.75 78.75H31.25V86.25H38.75V78.75Z" fill="#98CCFD" />
        <Path
          d="M37.5 80V85H32.5V80H37.5ZM40 77.5H30V87.5H40V77.5Z"
          fill="#98CCFD"
        />
        <Path d="M53.75 78.75H46.25V86.25H53.75V78.75Z" fill="#98CCFD" />
        <Path
          d="M52.5 80V85H47.5V80H52.5ZM55 77.5H45V87.5H55V77.5Z"
          fill="#98CCFD"
        />
        <Path d="M68.75 78.75H61.25V86.25H68.75V78.75Z" fill="#98CCFD" />
        <Path
          d="M67.5 80V85H62.5V80H67.5ZM70 77.5H60V87.5H70V77.5Z"
          fill="#98CCFD"
        />
        <Path d="M83.75 78.75H76.25V86.25H83.75V78.75Z" fill="#B6DCFE" />
        <Path
          d="M82.5 80V85H77.5V80H82.5ZM85 77.5H75V87.5H85V77.5Z"
          fill="#B6DCFE"
        />
        <Path
          d="M82.5 40H17.5C16.12 40 15 41.12 15 42.5C15 43.88 16.12 45 17.5 45H82.5C83.88 45 85 43.88 85 42.5C85 41.12 83.88 40 82.5 40Z"
          fill="#4788C7"
        />
        <Path d="M76.25 3.75H23.75V43.75H76.25V3.75Z" fill="white" />
        <Path
          d="M75 5V42.5H25V5H75ZM77.5 2.5H22.5C22.5 4.8825 22.5 45 22.5 45H77.5C77.5 45 77.5 4.8825 77.5 2.5Z"
          fill="#4788C7"
        />
        <Path
          d="M36.25 13.75H63.75"
          stroke="#4788C7"
          stroke-miterlimit="10"
          stroke-linecap="round"
        />
        <Path
          d="M36.25 23.75H63.75"
          stroke="#4788C7"
          stroke-miterlimit="10"
          stroke-linecap="round"
        />
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

export default Receipt;
