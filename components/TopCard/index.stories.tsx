import React from "react";
import { storiesOf } from "@storybook/react-native";
import TopCard from ".";

storiesOf("Compornent", module).add("TopCard", () => (
  <TopCard balance={1000} />
));
