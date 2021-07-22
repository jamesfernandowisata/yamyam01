import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import Axios from "axios";
//import { SafeAreaView } from "react-navigation";

function updateOrder({ navigation }) {
  const addBP = () => {
    const product = JSON.stringify({
      name: name,
      value: value,
      description: description
      //price: parseInt(price)
    });

    Axios.put(
      `http://178.128.30.185:5000/api/v1/orders/${m_partners_id}`,
      product,
      {
        headers: { "Content-Type": "application/json" }
      }
    )
      .then(response => {
        console.log("checking response", response);
        setInputName("");
        setInputDescription("");
        //setInputPrice("");
        setInputValue("");
      })
      .catch(error => {
        console.log(JSON.stringify(error));
      });

    //    Axios.get('http://192.168.88.233:5000/api/v1/products').then(response=>{console.log(response.data)}) ;
  };

  const deleteBP = () => {
    const product = JSON.stringify({
      name: name,
      value: value,
      description: description,
      price: parseInt(price)
    });

    Axios.delete(
      `http://192.168.88.152:5000/api/v1/orders/${m_partners_id}`,
      {
        headers: { "Content-Type": "application/json" }
      }
    )
      .then(response => {
        console.log("checking response", response);
        setInputName("");
        setInputDescription("");
        //setInputPrice("");
        setInputValue("");
      })
      .catch(error => {
        console.log(JSON.stringify(error));
      });
  };

  //const {width, height} =Dimensions.get('window');
  const [name, setInputName] = useState(navigation.getParam("name"));
  const [value, setInputValue] = useState(navigation.getParam("value"));
  const [m_partners_id] = useState(navigation.getParam("m_order_id"));

  return (
    <SafeAreaView style={styles.updateView}>
      <SafeAreaView style={styles.header}>
        <Text style={styles.headerText}>Partners</Text>
      </SafeAreaView>
      <View style={styles.inputForm}>
        <View style={styles.textContainer}>
          {/* <Text style={styles.text}>Name</Text> */}
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={value => setInputName(value)}
            placeholder="Name"
          ></TextInput>
        </View>

        <View style={styles.textContainer}>
          {/* <Text style={styles.text}>Description</Text> */}
          <TextInput
            style={styles.textInput}
            value={value}
            onChangeText={value => setInputValue(value)}
            placeholder="Description"
          ></TextInput>
        </View>

        <TouchableOpacity onPress={addBP} style={styles.addButton}>
          <Text style={styles.addButtonText}>UPDATE</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteBP} style={styles.deleteButton}>
          <Text style={styles.addButtonText}>DELETE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  updateView: {
    flex: 1,
    marginTop: "7%"
  },
  addButtonText: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center"
  },
  addButton: {
    backgroundColor: "skyblue",
    marginVertical: 10,
    marginHorizontal: 15,
    elevation: 2,
    height: 45
  },
  deleteButton: {
    backgroundColor: "red",
    marginVertical: 10,
    marginHorizontal: 15,
    elevation: 2,
    height: 45
  },
  header: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 10,
    borderBottomColor: "#00CFE6",
    paddingTop: 20,
    paddingBottom: 20
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
  inputForm: {
    marginVertical: 10
  },
  textContainer: {
    margin: 5,
    borderColor: "#FB6949"
  },
  textInput: {
    alignSelf: "stretch",
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: "#ffffff",
    fontSize: 23,
    borderRadius: 5,
    elevation: 3
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

  // Title:{
  //   width:width,
  //   marginHorizontal: width *0.05,
  //   marginVertical:width *0.03,
  //   color :'black',
  //   fontSize:20,
  //   fontWeight:'bold',
  // },
  // Subtitle:{
  //   marginHorizontal: width *0.05,
  //   fontSize:15,
  //   color:'gray'
  // }
});

export default updateOrder;
