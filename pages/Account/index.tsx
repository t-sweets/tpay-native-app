import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";
import { default as HomeIcon } from "app/components/icons/Home";
import AccountPane from "app/components/AccountPane";
import Wallpeper from "app/components/Wallpaper";

function Account() {
  return (
    <Wallpeper>
      <AccountPane name={"hogehoge"} />
    </Wallpeper>
  );
}

export default Account;
