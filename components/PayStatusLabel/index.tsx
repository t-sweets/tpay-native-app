import React from "react";
import { PayStatusType } from "app/models/Purchase";
import styled from "styled-components/native";

interface Props {
  type: PayStatusType;
  allowFontScaling?: boolean;
}

function PayStatusLabel({ type, allowFontScaling }: Props) {
  const label =
    type === PayStatusType.Checkout
      ? "支払い完了"
      : type === PayStatusType.Cancel
      ? "キャンセル処理中"
      : "";

  return (
    <Container type={type}>
      <Label allowFontScaling={allowFontScaling}>{label}</Label>
    </Container>
  );
}

PayStatusLabel.defaultProps = {
  allowFontScaling: false
};

const Container = styled.View<{ type: PayStatusType }>`
  width: 125;
  height: 18;
  align-items: center;
  justify-content: center;
  border-radius: 18;

  background-color: ${({ type }) =>
    type === PayStatusType.Checkout
      ? "#35BB00"
      : type === PayStatusType.Cancel
      ? "#FF9822"
      : "#000000"};
`;

const Label = styled.Text`
  font-size: 12;
  font-weight: 500;
  line-height: 15;
  color: #fff;
`;

export default PayStatusLabel;
