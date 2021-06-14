import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Button,
  Dimensions,
  ScrollView,
  FlatList
} from "react-native";
import Axios from "axios";
import { SafeAreaView } from "react-navigation";
//import Swipeout from 'react-native-swipeout';

const { width, height } = Dimensions.get("window");
const viewBP = ({ navigation }) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    Axios.get("http://178.128.30.185:5000/api/v1/partners")
      .then(response => {
        console.log("check", response.data);
        setProductList(response.data.data);
      })
      .catch(error => {
        console.log(JSON.stringify(error));
      });
  };
  {
    console.log(productList);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <Text style={styles.headerText}>YamYam!</Text>
          </View>
          {/* <Button
            onPress={() => navigation.navigate("Create")}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          /> */}
        </View>

        {/* {productList.map(products => (
          <TouchableOpacity
            onPress={() => navigation.navigate("updateBP", products)}
          >
            <View style={styles.productContainer}>
              <Text>{products.name}</Text>
              <Text style={styles.Subtitle}>{products.description}</Text>
            </View>
          </TouchableOpacity>
        ))} */}

        <FlatList
          data={productList}
          renderItem={({ item, c_bpartner_id }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("updateBP", item)}
            >
              <View style={styles.productContainer}>
                <Text>{item.name}</Text>
                <Text style={styles.Subtitle}>{item.description}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        ></FlatList>

        <View style={styles.footer}></View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("createBP")}
        style={styles.addButton}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 10,
    borderBottomColor: "#00CFE6",
    paddingVertical: 20,
    marginTop: "7%"
  },
  productContainer: {
    // flex: 1,
    paddingVertical: 30,
    marginTop: 20,
    marginHorizontal: 20,
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    elevation: 5
  },
  deleteButton: {
    backgroundColor: "#ff0000",
    width: width * 0.5,
    color: "#ffffff"
  },
  Title: {
    width: width,
    marginHorizontal: width * 0.05,
    marginVertical: width * 0.03,
    color: "black",
    fontSize: 20,
    fontWeight: "bold"
  },
  Subtitle: {
    marginHorizontal: width * 0.05,
    fontSize: 15,
    color: "gray"
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10
  },
  addButtonText: {
    color: "#eeeeee",
    fontSize: 26,
    fontWeight: "700"
  },
  addButton: {
    position: "absolute",
    zIndex: 11,
    right: 20,
    bottom: 60,
    backgroundColor: "#21272b",
    width: 80,
    height: 80,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8
  },
  buttonContainer: {
    position: "absolute",
    width: 100,
    height: 80,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    zIndex: 11,
    left: 20,
    bottom: 60
  }
});

export default viewBP;
