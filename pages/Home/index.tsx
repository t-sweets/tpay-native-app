import React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import TopCard from "../../components/TopCard";

function Home() {
  return (
    <ImageBackground
      source={require("../../assets/background.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.topCard}>
          <TopCard balance={200} />
        </View>
        <Text>HOME画面</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  background: {
    width: "100%",
    height: "100%"
  },
  topCard: {
    marginTop: 65,
    marginBottom: 40
  }
});

export default Home;
