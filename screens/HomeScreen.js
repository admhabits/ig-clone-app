import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";

const changeColor = () => {
  return "black";
};

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Stories />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: changeColor(),
  },
});
