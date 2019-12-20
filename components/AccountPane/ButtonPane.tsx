import React from "react";
import { ImageSourcePropType, ButtonProps } from "react-native";
import styled from "styled-components/native";

interface Props {
  icon?: React.ComponentType<any>;
  size?: string | number;
  width?: string | number;
  label?: string;
  onPress?(): void;
}

function ButtonPane({ icon, size, width, label, onPress }: Props) {
  const Icon = icon;
  return (
    <Container width={width} onPress={onPress}>
      {icon && <Icon size={size} />}
      {label && <Label allowFontScaling={false}>{label}</Label>}
    </Container>
  );
}

const Container = styled.TouchableOpacity<{ width?: number | string }>`
  width: ${({ width }) => width ?? `${100 / 3}%`};
  height: 100;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Label = styled.Text`
  font-size: 14;
  font-weight: 400;
  margin-top: 5px;
`;

export default ButtonPane;
