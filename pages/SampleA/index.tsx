import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";

interface SampleAProps {
  id: string;
}

function SampleA({ id }: SampleAProps) {
  return (
    <View style={styles.container}>
      <Text>{`hogehoge ${id}`}</Text>
      <Button title={"back"} onPress={Actions.pop}>
        back
      </Button>
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

export default SampleA;
