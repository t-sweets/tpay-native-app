import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";
import { default as HomeIcon } from "app/components/icons/Home";

function Account() {
  return (
    <View style={styles.container}>
      <Button title={"back"} onPress={Actions.pop}>
        back
      </Button>
      <HomeIcon></HomeIcon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

export default Account;
