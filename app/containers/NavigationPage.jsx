import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  BackHandler,
  Alert
} from "react-native";
import { SafeAreaView } from "react-navigation";
import HandleBack from "./exit";

const NavigationPage = ({ navigation }) => {
  BackHandler.addEventListener("hardwareBackPress", function() {
    Alert.alert(
      "Exit",
      "are you sure want to exit?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => BackHandler.exitApp()
        }
      ],
      {
        cancelable: false
      }
    );
    return true;
  });
  // onBack = () => {
  //   if (BackHandler.addEventListener("hardwareBackPress", () => true)) {
  //     Alert.alert(
  //       "Exit",
  //       "Are you sure want tu Quit",
  //       [
  //         {
  //           text: "No",
  //           onPress: () => {},
  //           style: "cancel"
  //         },
  //         { text: "Yes", onPress: () => BackHandler.exitApp() }
  //       ],
  //       { cancelable: false }
  //     );
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };
  return (
    //<HandleBack onBack={this.onBack}>
    <SafeAreaView style={styles.navigationContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>YamYam!</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.productContainer}
      >
        <Text style={styles.textButton}>Product</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("viewBP")}
        style={styles.BpartnerContainer}
      >
        <Text style={styles.textButton}>BPartner</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.orderContainer}>
        <Text style={styles.textButton}>Order</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.orderLineContainer}>
        <Text style={styles.textButton}>OrderLine</Text>
      </TouchableOpacity>
    </SafeAreaView>
    //</HandleBack>
  );
};

const styles = StyleSheet.create({
  navigationContainer: {
    flex: 1
  },
  productContainer: {
    position: "absolute",
    margin: 10,
    backgroundColor: "blue",
    width: "30%",
    height: 70,
    elevation: 2,
    top: 150,
    left: "10.5%"
  },
  BpartnerContainer: {
    position: "absolute",
    margin: 10,
    backgroundColor: "blue",
    width: "30%",
    height: 70,
    elevation: 2,
    top: 150,
    left: "55%"
  },
  orderContainer: {
    position: "absolute",
    margin: 10,
    backgroundColor: "blue",
    width: "30%",
    height: 70,
    elevation: 2,
    top: 250,
    left: "10.5%"
  },
  orderLineContainer: {
    position: "absolute",
    margin: 10,
    backgroundColor: "blue",
    width: "30%",
    height: 70,
    elevation: 2,
    top: 250,
    left: "55%"
  },
  textButton: {
    fontSize: 20,
    color: "#ffffff",
    alignSelf: "center",
    marginTop: "20%"
  },
  header: {
    backgroundColor: "#b00020",
    alignItems: "center",
    justifyContent: "center",
    // borderBottomWidth: 10,
    // borderBottomColor: "dodgerblue",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    marginTop: "8%"
  },
  headerText: {
    color: "#ffffff",
    fontSize: 36,
    paddingVertical: 15,
    fontWeight: "bold"
  }
});

export default NavigationPage;
