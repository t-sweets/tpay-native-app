import React from "react";
import { Image, View, StyleSheet } from "react-native";

function PurchaseList() {
  return (
    <View style={styles.containers}>
      <Image
        style={styles.shopIcon}
        source={require("../../assets/icon.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containers: {
    width: 400,
    backgroundColor: "red",

    flexDirection: "column",
    alignItems: "center",

    shadowColor: "#ccc",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 3,
    shadowOpacity: 1,
    elevation: 2
  },
  shopIcon: {
    width: 60,
    height: 60
  }
});

export default PurchaseList;
