import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Router, Scene } from "react-native-router-flux";
import SampleB from "./pages/SampleB";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="tabbar" tabs>
          <Scene key="sampleA" hideNavBar initial component={Home} />
          <Scene key="sampleB" hideNavBar component={SampleB} />
        </Scene>
      </Scene>
    </Router>
  );
}
