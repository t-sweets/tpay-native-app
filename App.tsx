import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Router, Scene } from "react-native-router-flux";
import SampleA from "./pages/SampleA";
import SampleB from "./pages/SampleB";

export default function App() {
  return (
    <Router>
      <Scene key="root">
        <Scene key="sampleA" initial component={SampleA} />
        <Scene key="sampleB" component={SampleB} />
      </Scene>
    </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
