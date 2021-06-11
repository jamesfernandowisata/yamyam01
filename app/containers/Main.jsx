import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Button,
  ScrollView,
  Dimensions
} from "react-native";
import Axios from "axios";
import { Picker } from "@react-native-picker/picker";

import { getPixelSizeForLayoutSize } from "react-native/Libraries/Utilities/PixelRatio";
import { SafeAreaView } from "react-navigation";

//const UOM = [{ name: "KG" }, { name: "Ekor" }];

const { width, height } = Dimensions.get("window");
const Main = ({ navigation, screenName }) => {
  const [name, setInputName] = useState("");
  const [value, setInputValue] = useState("");
  const [description, setInputDescription] = useState("");
  const [price, setInputPrice] = useState("");
  const [UOM, setUOM] = useState([]);
  const [selectedUOM, setSelectedUOM] = useState();
  const getUOM = () => {
    Axios.get("http://178.128.30.185:5000/api/v1/uoms ")
      .then(response => {
        console.log("check", response.data);
        setUOM(response.data.data);
      })
      .catch(error => {
        console.log(JSON.stringify(error));
      });
  };

  useEffect(() => {
    getUOM();
  }, []);

  const addProduct = () => {
    const product = JSON.stringify({
      name: name,
      value: value,
      description: description,
      price: parseInt(price),
      c_uom_id: selectedUOM
    });

    Axios.post("http://178.128.30.185:5000/api/v1/products", product, {
      headers: { "Content-Type": "application/json" }
    })
      .then(response => {
        console.log("checking response", response);
        setInputName("");
        setInputDescription("");
        setInputPrice("");
        setInputValue("");
      })
      .catch(error => {
        console.log(JSON.stringify(error));
      });

    //    Axios.get('http://192.168.88.233:5000/api/v1/products').then(response=>{console.log(response.data)}) ;
  };

  const validateInput = (item, type) => {
    if (item.length > 15) {
      //alert("input invalid");
      if (type == 3 && item.length < 30) setInputDescription(item);
    } else {
      if (type == 1) setInputName(item);
      if (type == 2) setInputValue(item);
      if (type == 3) setInputDescription(item);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Product</Text>
        </View>

        <View style={styles.inputForm}>
          <View style={styles.textContainer}>
            {/* <Text style={styles.text}>Name</Text> */}
            <TextInput
              style={styles.textInput}
              value={name}
              onChangeText={value => validateInput(value, 1)}
              placeholder="Name"
            ></TextInput>
          </View>

          <View style={styles.textContainer}>
            {/* <Text style={styles.text}>Value</Text> */}
            <TextInput
              style={styles.textInput}
              value={value}
              onChangeText={value => validateInput(value, 2)}
              placeholder="Value"
            ></TextInput>
          </View>

          <View style={styles.textContainer}>
            {/* <Text style={styles.text}>Description</Text> */}
            <TextInput
              style={styles.textInput}
              value={description}
              onChangeText={value => validateInput(value, 3)}
              placeholder="Description"
            ></TextInput>
          </View>

          <View style={styles.textContainer}>
            {/* <Text style={styles.text}>Price</Text> */}
            <View style={styles.pickerInput}>
              <Picker
                style={styles.pickerText}
                selectedValue={UOM}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedUOM(itemValue)
                }
              >
                {UOM.map(item => {
                  console.log(item);
                  return (
                    <Picker.Item
                      key={item.symbol}
                      label={item.symbol}
                      value={item.c_uom_id}
                    />
                  );
                })}
              </Picker>
            </View>
          </View>

          <View style={styles.textContainer}>
            {/* <Text style={styles.text}>Price</Text> */}
            <TextInput
              style={styles.textInput}
              value={price}
              keyboardType="numeric"
              onChangeText={value => setInputPrice(value)}
              placeholder="Price"
            ></TextInput>
          </View>
        </View>

        {/* <View style={styles.buttonContainer}>
        <TouchableOpacity>
        <Text>Update</Text>
        </TouchableOpacity>
      </View> */}
      </ScrollView>
      <View style={styles.footer}></View>
      <TouchableOpacity onPress={addProduct} style={styles.addButton}>
        <Text style={styles.addButtonText}>Create</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
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

  inputForm: {
    marginVertical: 10
  },

  textContainer: {
    margin: 5,
    //borderLeftWidth: 5,
    //borderTopWidth: 5,
    //borderRightWidth: 5,
    //borderBottomWidth: 5,
    borderColor: "#FB6949"
    // backgroundColor: "red",
  },
  text: {
    alignSelf: "flex-start",
    fontSize: 24,
    left: 5
  },

  headerText: {
    color: "#ffffff",
    fontSize: 36,
    paddingVertical: 15,
    fontWeight: "bold"
  },

  scrollContainer: {
    flex: 1,
    marginBottom: 100
  },

  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10
  },
  textInput: {
    alignSelf: "stretch",
    //color: "#21272b",
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: "#ffffff",
    // borderBottomWidth: 1,
    // borderColor: "grey",
    // borderRightWidth: 4,
    // borderWidth: 1,
    // borderColor: "grey",
    fontSize: 23,
    borderRadius: 5,
    elevation: 3
  },
  pickerInput: {
    alignSelf: "stretch",
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: "#ffffff",
    fontSize: 23,
    borderRadius: 5,
    elevation: 3
  },
  pickerText: {
    alignSelf: "flex-end",
    fontSize: 20,
    width: "100%",
    height: 50
  },
  addButton: {
    width: width * 0.3,
    height: height * 0.1,
    position: "absolute",
    marginTop: height * 0.7,
    backgroundColor: "#21272b",
    marginVertical: height * 0.01,
    borderRadius: 10,
    alignSelf: "center",
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
  },
  updateButton: {
    fontSize: 20,
    color: "white"
  },
  addButtonText: {
    color: "#eeeeee",
    fontSize: 26,
    fontWeight: "700"
  }
});

export default Main;
