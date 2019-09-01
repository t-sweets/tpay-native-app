import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Router, Scene } from "react-native-router-flux";
import SampleB from "./pages/SampleB";
import Home from "./pages/Home";
import Icon from "react-native-vector-icons/FontAwesome";

export default function App() {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="tabbar" tabs showLabel={false} activeTintColor="#04a3e4">
          <Scene
            key="sampleA"
            iconName="home"
            icon={HomeIcon}
            hideNavBar
            initial
            component={Home}
          />
          <Scene key="sampleB" hideNavBar component={SampleB} />
        </Scene>
      </Scene>
    </Router>
  );
}

const HomeIcon = (props: { focused: boolean; iconName: string }) => {
  return (
    <Icon
      style={{
        color: props.focused ? "#04a3e4" : "#999",
        lineHeight: 55
      }}
      name={props.iconName || "circle"}
      size={28}
    />
  );
};
