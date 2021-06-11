import React from "react";
import { View, Text } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
//import {createSwitchNavigator} from '@react-navigation/native';
import Main from "../app/containers/Main";
import viewProduct from "../app/containers/viewProduct";
import updateProduct from "../app/containers/updateProduct";
import NavigationPage from "../app/containers/NavigationPage";
import LoginScreen from "../app/containers/LoginScreen";
import createBP from "../app/BpContainer/createBP";
import updateBP from "../app/BpContainer/updateBP";
import viewBP from "../app/BpContainer/viewBP";
import RegisterScreen from "../app/containers/RegisterScreen";



const AppNavigator = createStackNavigator(
  {
    Home: viewProduct,
    Create: Main,
    Detail: updateProduct,
    Navigation: NavigationPage,
    createBP: createBP,
    updateBP: updateBP,
    viewBP: viewBP
  },
  {
    initialRouteName: "Navigation",
    headerMode: "none"
  }
);

const AuthNavigator = createSwitchNavigator(
  {
    LoginPage: LoginScreen,
    register: RegisterScreen,
    App: AppNavigator
  },
  { initialRouteName: "LoginPage" }
);

export default AuthNavigator;
