import React from "react";
import Svg, { Path } from "react-native-svg";
import styled from "styled-components/native";

interface Props {
  size?: number | string;
}

const Transfer = ({ size = 100 }: Props) => {
  return (
    <IconContainer size={size}>
      <Svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <Path
          d="M3.75 91.25V36.2975L44.955 7.8225C46.445 6.795 48.1875 6.25 50 6.25C51.8125 6.25 53.555 6.795 55.045 7.8225L96.25 36.2975V91.25H3.75Z"
          fill="#DFF0FE"
        />
        <Path
          d="M50 7.5C51.555 7.5 53.055 7.9675 54.335 8.8525L95 36.95V90H5V36.95L45.665 8.8525C46.945 7.9675 48.445 7.5 50 7.5ZM50 5C47.9875 5 45.975 5.5975 44.245 6.795L2.5 35.64V92.5H97.5V35.64L55.755 6.795C54.025 5.5975 52.0125 5 50 5Z"
          fill="#4788C7"
        />
        <Path
          d="M62.5 59.995H37.5L5 36.95L45.665 8.8525C46.945 7.9675 48.445 7.5 50 7.5C51.555 7.5 53.055 7.9675 54.335 8.8525L95 36.95L62.5 59.995Z"
          fill="#B6DCFE"
        />
        <Path
          d="M37.8975 58.745L23.75 48.71V6.25H76.25V48.71L62.1025 58.745H37.8975Z"
          fill="#98CCFD"
        />
        <Path
          d="M75 7.5V48.0675L61.7025 57.495H38.295L25 48.0675V7.5H75ZM77.5 5H22.5V49.3575C30.1875 54.8075 37.5 59.9925 37.5 59.9925H62.5C62.5 59.9925 69.8125 54.8075 77.5 49.3575V5Z"
          fill="#4788C7"
        />
        <Path
          d="M50 30C54.1421 30 57.5 26.6421 57.5 22.5C57.5 18.3579 54.1421 15 50 15C45.8579 15 42.5 18.3579 42.5 22.5C42.5 26.6421 45.8579 30 50 30Z"
          fill="white"
        />
        <Path
          d="M68.75 52.5C68.75 44.215 60.355 37.5 50 37.5C39.645 37.5 31.25 44.215 31.25 52.5C31.25 53.685 31.4425 54.83 31.7725 55.9325C35.17 58.3425 37.5 59.995 37.5 59.995H62.5C62.5 59.995 64.83 58.3425 68.2275 55.935C68.5575 54.83 68.75 53.685 68.75 52.5Z"
          fill="white"
        />
        <Path
          d="M61.355 57.5H38.37L7.2925 35.4175L5 36.95L37.5 59.995H62.5L95 36.95L92.8775 35.4925L61.355 57.5Z"
          fill="#4788C7"
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

export default Transfer;
