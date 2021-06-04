import React from "react";
import { View, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Main from "../app/containers/Main";
import viewProduct from "../app/containers/viewProduct";
import updateProduct from "../app/containers/updateProduct";
import NavigationPage from "../app/containers/NavigationPage";
import LoginScreen from "../app/containers/LoginScreen";
import createBP from "../app/BpContainer/createBP";
import updateBP from "../app/BpContainer/updateBP";
import viewBP from "../app/BpContainer/viewBP";

const AppNavigator = createStackNavigator(
  {
    Home: viewProduct,
    Create: Main,
    Detail: updateProduct,
    Navigation: NavigationPage,
    LoginPage: LoginScreen,
    createBP: createBP,
    updateBP: updateBP,
    viewBP: viewBP
  },
  {
    initialRouteName: "LoginPage"
  }
);

export default createAppContainer(AppNavigator);
