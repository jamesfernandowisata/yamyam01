import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
//import Main from "./app/containers/Main";
import AuthNavigator from "./routes/rootStack";
import { createAppContainer } from "react-navigation";
// import { createBottomTabNavigator } from 'react-navigation-tabs';

const AppContainer = createAppContainer(AuthNavigator);

// const TabNavigator = createBottomTabNavigator({
//   Home: HomeScreen,
//   Settings: SettingsScreen,
// });

export default function App() {
  return (
    <NavigationContainer>
      <AppContainer />
    </NavigationContainer>
    // <Main></Main>
    //<productGet></productGet>
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
