import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  BackHandler,
  Dimensions,
  Alert
} from "react-native";
import { SafeAreaView } from "react-navigation";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHandsHelping } from '@fortawesome/free-solid-svg-icons'
import { faBox } from '@fortawesome/free-solid-svg-icons'
import { faStickyNote } from '@fortawesome/free-solid-svg-icons'
const { width, height} = Dimensions.get("window");
const NavigationPage = ({ navigation }) => {
  // const onBackPress = useCallback(() => {
  //   Alert.alert("Exit the app", "Do you want to exit the app?", [
  //     {
  //       text: "Cancel",
  //       style: "cancel"
  //     },
  //     {
  //       text: "Exit",
  //       onPress: () => BackHandler.exitApp()
  //     }
  //   ]);
  //   return true;
  // }, []);

  // useEffect(() => {
  //   BackHandler.addEventListener("hardwareBackPress", onBackPress);

  //   return () => {
  //     BackHandler.removeEventListener("hardwareBackPress", onBackPress);
  //   };
  // }, [onBackPress]);

  // BackHandler.addEventListener("hardwareBackPress", function() {
  //   Alert.alert(
  //     "Exit",
  //     "are you sure want to exit?",
  //     [
  //       {
  //         text: "Cancel",
  //         onPress: () => console.log("Cancel Pressed"),
  //         style: "cancel"
  //       },
  //       {
  //         text: "OK",
  //         onPress: () => BackHandler.exitApp()
  //       }
  //     ],
  //     {
  //       cancelable: false
  //     }
  //   );
  //   return true;
  // });

  return (
    //<HandleBack onBack={this.onBack}>
    <SafeAreaView style={styles.navigationContainer}>
    <View style={styles.loginTextContainer}>
        <View style={styles.header}>
        <Text style={styles.loginText}>Navigation</Text>
        <Text style={styles.headerText}>YamYam!</Text>
        </View>
      </View>
      <View style={styles.MidTextContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.productContainer}
      >
        <FontAwesomeIcon icon={faBox} style={styles.iconUser} size={45} color={"white"}/>
        <Text style={styles.textButton}>Product</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("viewBP")}
        style={styles.BpartnerContainer}
      >
      <FontAwesomeIcon icon={faHandsHelping} style={styles.iconUser} size={45} color={"white"}/>
        <Text style={styles.textButton}>BPartner</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.orderContainer}
        onPress={() => navigation.navigate("viewBP")}
        style={styles.orderContainer}
      >
      <FontAwesomeIcon icon={faStickyNote} style={styles.iconUser} size={45} color={"white"}/>
        <Text style={styles.textButton}>Order</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
    //</HandleBack>
  );
};

const styles = StyleSheet.create({
  loginScreenContainer: {
    flex: 1,
    marginTop: "17%"
  },
  navigationContainer: {
    flex: 1
  },
  loginTextContainer: {
    marginBottom: "10%",
    marginTop: 10,
    borderRadius: 5,
    width: width

  },
  MidTextContainer: {
    alignItems: "center",
    alignContent: "center"
  },
  productContainer: {
    //position: "absolute",
    padding: "2%",
    backgroundColor: "#b00020",
    textAlign: "center",
    alignItems: "center",
    margin: "2%",
    width: "70%",
    height: "20%",
    elevation: 2,
    borderRadius:7
    //top: 150,
    //left: "10.5%"
  },
  BpartnerContainer: {
    //position: "absolute",
    padding: "2%",
    margin: "2%",
    backgroundColor: "#b00020",
    textAlign: "center",
    alignItems: "center",
    width: "70%",
    height: "20%",
    elevation: 2,
    borderRadius:7
    //top: 150,
    //left: "55%"
  },
   loginText: {
    fontSize: 25,
    alignSelf: "flex-start",
    marginHorizontal: 15,
    bottom: 5,
    color: "grey"
  },
  orderContainer: {
   // position: "absolute",
   padding: "2%",
   backgroundColor: "#b00020",
   textAlign: "center",
   alignItems: "center",
   margin: "2%",
   width: "70%",
   height: "20%",
   elevation: 2,
   borderRadius:7
    //top: 250,
    //left: "10.5%"
  },
  textButton: {
    fontSize: 20,
    color: "#ffffff",
    alignSelf: "center",
    marginTop: "2%",
    fontWeight:"bold"
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    // borderBottomWidth: 10,
    // borderBottomColor: "dodgerblue",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    marginTop: "8%"
  },
  MidTextContainer:{
    alignItems: "center"
  },
  headerText: {
    color: "#b00020",
    fontSize: 54,
    paddingVertical: 25,
    fontWeight: "bold"
  }
});

export default NavigationPage;
