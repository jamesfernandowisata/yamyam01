
import { createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from "../app/containers/product/Main";
import viewProduct from "../app/containers/product/viewProduct";
import updateProduct from "../app/containers/product/updateProduct";
import NavigationPage from "../app/containers/Main/NavigationPage";
import LoginScreen from "../app/containers/Main/LoginScreen";
import createBP from "../app/containers/BpContainer/createBP";
import updateBP from "../app/containers/BpContainer/updateBP";
import viewBP from "../app/containers/BpContainer/viewBP";
import RegisterScreen from "../app/containers/Main/RegisterScreen";
import createBPLocation from "../app/containers/BpContainer/createBPLocation";
import updateBPLocation from "../app/containers/BpContainer/updateBPLocation";
import createOrder from "../app/containers/OrdeContainer/createOrder";
import createOrderLine from "../app/containers/OrdeContainer/createOrderLine"
import updateOrder from "../app/containers/OrdeContainer/updateOrder";
import updateOrderLine from "../app/containers/OrdeContainer/updateOrderLine";
import viewOrder from "../app/containers/OrderContainer/viewOrder";


const AppNavigator = createStackNavigator(
  {
    Home: viewProduct,
    Create: Main,
    Detail: updateProduct,
    Navigation: NavigationPage,
    createBP: createBP,
    updateBP: updateBP,
    viewBP: viewBP,
    createBPLocation: createBPLocation,
    updateBPLocation : updateBPLocation,
    createOrder: createOrder,
    createOrderLine: createOrderLine,
    updateOrder:updateOrder,
    viewOrder: viewOrder,
    updateOrderLine: updateOrderLine

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
    //Navigation: NavigationPage,
    App: AppNavigator
  },
  { initialRouteName: "LoginPage" }
);

export default AuthNavigator;
