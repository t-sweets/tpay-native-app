import React from "react";
import styled from "styled-components/native";
import { formatDate } from "app/lib/utils";

interface DetailTitleProps {
  title: string;
  date: Date;
}

export default function DetailTitle({ title, date }: DetailTitleProps) {
  const dateStr = formatDate(date, "YYYY年M月D日(E) h:m");

  return (
    <>
      <Title allowFontScaling={false}>{title}</Title>
      <DateText allowFontScaling={false}>{dateStr}</DateText>
    </>
  );
}

const Title = styled.Text`
  font-size: 18;
  font-weight: 500;
`;

const DateText = styled.Text`
  color: #666;
  font-size: 12;
  font-weight: 400;
  margin-top: 4px;
`;
