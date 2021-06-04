import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from "react-native";

const NavigationPage = ({ navigation }) => {
  return (
    <View style={styles.navigationContainer}>
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
    </View>
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
    borderBottomLeftRadius: 20
  },
  headerText: {
    color: "#ffffff",
    fontSize: 36,
    paddingVertical: 15,
    fontWeight: "bold"
  }
});

export default NavigationPage;
