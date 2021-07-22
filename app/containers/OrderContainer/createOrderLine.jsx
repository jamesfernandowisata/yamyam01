import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Button,
    ScrollView,
    SafeAreaView,
    Dimensions
} from "react-native";
import Axios from "axios";
import { Picker } from "@react-native-picker/picker";

import { getPixelSizeForLayoutSize } from "react-native/Libraries/Utilities/PixelRatio";

const { width, height } = Dimensions.get("window");

const createOrderLine = ({ navigation }) => {

    const [order_id,setInputC_partnerID] = useState(navigation.getParam("data"));
   // const x = JSON.stringify(navigation.getParam("data"));
    const [nameLine,setNameLine]=useState("");
    const [valueLine,setValueLine] =useState("");


    const addBPLocation = () => {
      const orderline = JSON.stringify({
        c_order_id:order_id,
        name: nameLine,
        value: valueLine,
      });


    Axios.post(`http://178.128.30.185:5000/api/v1/partners/${order_id}/locations`, orderline, {
        headers: { "Content-Type": "application/json" }
    })
        .then(response => {
        console.log("checking response", response);
        console.log(bp_id);
        })
        .catch(error => {
        console.log(JSON.stringify(error));
        });

    //    Axios.get('http://192.168.88.233:5000/api/v1/products').then(response=>{console.log(response.data)}) ;
    };





  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Order Line</Text>
        </View>

            <View style={styles.textContainer}>
            <Text>Name</Text>


          <View style={styles.textContainer}>
            {/* <Text style={styles.text}>Name</Text> */}
            <TextInput
              style={styles.textInput}
              value={nameLine}
              onChangeText={value => setNameLine(value)}
              placeholder="name"
            ></TextInput>
          </View>
          <Text>Value</Text>


<View style={styles.textContainer}>
  {/* <Text style={styles.text}>Name</Text> */}
  <TextInput
    style={styles.textInput}
    value={valueLine}
    onChangeText={value => setValueLine(value)}
    placeholder="value"
  ></TextInput>
</View>

        </View>
      </ScrollView>
      <View style={styles.footer}></View>
      <TouchableOpacity onPress={addBPLocation} style={styles.addButton}>
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
    borderBottomLeftRadius: 20,
    marginTop: "8%"
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

export default createOrderLine;
