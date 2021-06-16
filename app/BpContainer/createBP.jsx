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

const createBP = ({ navigation }) => {
  const [name, setInputName] = useState("");
  const [value, setInputValue] = useState("");
  const [description, setInputDescription] = useState("");
  const [c_partner_id,setC_partner_id] =useState("");
  //const [partner,setPartner] = useState([]);

  const addBpartner = () => {
    const partners = JSON.stringify({
      name: name,
      value: value,
      description: description
    });

    Axios.post("http://178.128.30.185:5000/api/v1/partners", partners, {
      headers: { "Content-Type": "application/json" }
    })
      .then(response => {
        console.log(response.data.data.c_bpartner_id);
        setC_partner_id(response.data.data.c_bpartner_id);
        //console.log(c_partner_id);
        //setInputName(response.data.data.c_bpartner_id);
      })
      .catch(error => {
        console.log(JSON.stringify(error));
      });

    //    Axios.get('http://192.168.88.233:5000/api/v1/products').then(response=>{console.log(response.data)}) ;
  };

const navigatenextpage=()=>{
  navigation.navigate("createBPLocation",{data: c_partner_id})
}

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>BPartners</Text>
        </View>

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
            {/* <Text style={styles.text}>Value</Text> */}
            <TextInput
              style={styles.textInput}
              value={value}
              onChangeText={value => setInputValue(value)}
              placeholder="Value"
            ></TextInput>
          </View>

          <View style={styles.textContainer}>
            {/* <Text style={styles.text}>Description</Text> */}
            <TextInput
              style={styles.textInput}
              value={description}
              onChangeText={value => setInputDescription(value)}
              placeholder="Description"
            ></TextInput>
          </View>

        </View>
      </ScrollView>
      <View style={styles.footer}></View>
      <TouchableOpacity onPress={addBpartner} style={styles.addButton}>
        <Text style={styles.addButtonText}>Create</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={navigatenextpage} style ={styles.registerButtonContainer} >
        <Text style ={styles.textButton}>Add Location</Text>
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
  textButton:{
    color: "black"
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
  registerButtonContainer: {
    position: "relative",
    alignItems: "center",
    alignContent:"center",
    bottom: 150,
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

export default createBP;
