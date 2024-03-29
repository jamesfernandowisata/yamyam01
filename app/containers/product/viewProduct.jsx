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
  Image,
  RefreshControl,
  ToastAndroid,
} from "react-native";
import Axios from "axios";
import { SafeAreaView } from "react-navigation";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBox } from '@fortawesome/free-solid-svg-icons';

const { width, height } = Dimensions.get("window");
const viewProduct = ({ navigation }) => {
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
    Axios.get(`http://178.128.30.185:5000/api/v1/products?page=${page}&limit=10`)
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
        `http://178.128.30.185:5000/api/v1/products?page=${page}&limit=10`
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
      <FontAwesomeIcon icon={faBox} style={styles.iconUser} size={45} color={"white"}/>
        <Text style={styles.headerText}>Product</Text>
      </View>
      <FlatList
        data={productList}
        numColumns ={2}
        style={styles.flatlistContainer}
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
          <View style={styles.ProductImageContainer}>
          <Image
            source={{uri : 'https://via.placeholder.com/600'}}
            style={{width: '100%', height: '100%'}}
          />
          </View>
          <View style={styles.InfoTextContainer}>
          <Text>{item.name}</Text>
            <Text style={styles.Subtitle}>{item.description}</Text>
          </View>
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
    backgroundColor: "#b00020",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 10,
    borderBottomColor: "#ffffff",
    marginTop: "7%",
    paddingVertical: 20,
  },
  headerText: {
    color: "#ffffff",
    fontSize:20,
    fontWeight: "bold",
  },
  ProductImageContainer:{
    width:'100%',
    height:'70%'
  },
  productContainer: {
    flex: 1,
    paddingVertical: '2%',
    paddingHorizontal:'2%',
    width:'44%',
    marginTop: '2%',
    marginHorizontal: '1%',
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    elevation: 5,
    borderBottomWidth: 10,
    borderBottomColor: "#b00020",
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

export default viewProduct;