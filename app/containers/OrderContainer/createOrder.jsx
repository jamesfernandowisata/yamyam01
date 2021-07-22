import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Button,
    ScrollView,
    SafeAreaView
} from "react-native";
import Axios from "axios";
import { Picker } from "@react-native-picker/picker";

import { getPixelSizeForLayoutSize } from "react-native/Libraries/Utilities/PixelRatio";

const createOrder = ({ navigation, screenName }) => {
    const [name, setInputName] = useState("");
    const [value, setInputValue] = useState("");
    const [description, setInputDescription] = useState("");
    const [orderLocation, setOrderLocation] = useState("");
    const [selectOrder, setSelectOrder] = useState();

    const addOrder = () => {
    const order = JSON.stringify({
        name: name,
        value: value,
        description: description
    });

    Axios.post("http://178.128.30.185:5000/api/v1/orders", order, {
        headers: { "Content-Type": "application/json" }
    })
        .then(response => {
        console.log("checking response", response);
        setInputName("");
        setInputDescription("");
        setInputValue("");
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
            <Text style={styles.headerText}>Order</Text>
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
            {/* 
            <View style={styles.textContainer}>
            <View style={styles.pickerInput}>
                <Picker
                style={styles.pickerText}
                selectedValue={bpLocation}
                onValueChange={(itemValue, itemIndex) =>
                    setselectedBpLocation(itemValue)
                }
                >
                {bpLocation.map(item => {
                    return (
                    <Picker.Item
                        key={item.name}
                        label={item.name}
                        value={item.name}
                    />
                    );
                })}
                </Picker>
            </View>
          </View>  */}
        </View>
        </ScrollView>
        <View style={styles.footer}></View>
        <TouchableOpacity onPress={addBpartner} style={styles.addButton}>
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
    position: "absolute",
    bottom: 30,
    backgroundColor: "#21272b",
    width: 160,
    height: 80,
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

export default createOrder;
