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
  FlatList,
  Card,
  RefreshControl,
  ToastAndroid,
} from "react-native";
import Axios from "axios";
import { SafeAreaView } from "react-navigation";

const { width, height } = Dimensions.get("window");
const viewOrder = ({ navigation }) => {
  const [productList, setProductList] = useState([]);
  const [page, setPage] = useState(1);
  const [fetchMore, setFetchMore] = useState(true);

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    getMoreProduct();
  }, [page]);

  const getProduct = (refresh) => {
    if (refresh) {
      setFetchMore(true);
    }
    Axios.get(`http://178.128.30.185:5000/api/v1/orders?page=${page}&limit=8`)
      .then((response) => {
        setProductList(response.data.data);
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
      });
    // console.log("Page: ", page);
  };

  const getMoreProduct = () => {
    console.log("check", fetchMore);
    console.log(page);
    if (fetchMore) {
      Axios.get(
        `http://178.128.30.185:5000/api/v1/orders?page=${page}&limit=8`
      )
        .then((response) => {
          if (response.data.isMaxPage) {
            setFetchMore(false);
          }
          setProductList(response.data.data);
        })
        .catch((error) => {
          console.log(JSON.stringify(error));
        });
    }
    // console.log("Page: ", page);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>YamYam!</Text>
      </View>
      {/* <Button
            onPress={() => navigation.navigate("Create")}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          /> */}

      {/* {productList.map(products => (
        <View key={products.m_product_id}>
        <TouchableOpacity
            onPress={() => navigation.navigate("Detail", products)}
          >
            <View style={styles.productContainer}>
              <Text>{products.name}</Text>
              <Text style={styles.Subtitle}>{products.description}</Text>
            </View>
          </TouchableOpacity>
        </View>
          
        ))} */}
      {/* <SafeAreaView style={{ backgroundColor: "red" }}> */}
      <FlatList
        data={productList}
        onEndReachedThreshold={0.01}
        onEndReached={() => setPage(page + 1)}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => getProduct(true)}
          />
        }
        renderItem={({ item, m_product_id }) => (
          <TouchableOpacity
            style={styles.productContainer}
            onPress={() => navigation.navigate("Detail", item)}
          >
            <Text>{item.name}</Text>
            <Text style={styles.Subtitle}>{item.description}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      ></FlatList>
      {/* </SafeAreaView> */}

      {/* <View style={styles.footer}></View> */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Create")}
        style={styles.addButton}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 10,
    borderBottomColor: "#00CFE6",
    marginTop: "7%",
    paddingVertical: 20,
  },
  productContainer: {
    // flex: 1,
    paddingVertical: 30,
    marginTop: 20,
    marginHorizontal: 20,
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    elevation: 5,
  },
  deleteButton: {
    backgroundColor: "#ff0000",
    width: width * 0.5,
    color: "#ffffff",
  },
  Title: {
    width: width,
    marginHorizontal: width * 0.05,
    marginVertical: width * 0.03,
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  Subtitle: {
    marginHorizontal: width * 0.05,
    fontSize: 15,
    color: "gray",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  addButtonText: {
    color: "#eeeeee",
    fontSize: 26,
    fontWeight: "700",
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
    elevation: 8,
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
    bottom: 60,
  },
});

export default viewOrder;