import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";

function SampleB() {
  return (
    <View style={styles.container}>
      <Text>Replace screen</Text>
      <Button title={"SampleA"} onPress={Actions.sampleA}>
        SampleA
      </Button>
      <Button title={"Back"} onPress={Actions.pop}>
        Back
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

export default SampleB;
