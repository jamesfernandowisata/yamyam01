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
import { Item } from "native-base";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBox } from '@fortawesome/free-solid-svg-icons';
function updateProduct({ navigation }) {
  const addProduct = () => {
    const product = JSON.stringify({
      name: name,
      value: value,
      description: description,
      price: parseInt(price),
      c_uom_id: c_uom_id
    });

    Axios.put(
      `http://178.128.30.185:5000/api/v1/products/${m_product_id}`,
      product,
      {
        headers: { "Content-Type": "application/json" }
      }
    )
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

  // const [uomList,setUomList]= useState();

  // useEffect(() =>{
  //   getUOMSymbol();
  // },[])

  // const getUOMSymbol = () => {
  //   Axios.get(`http://178.128.30.185:5000/api/v1/uoms/${c_uom_id}`, {
  //     headers: { "Content-Type": "application/json" }
  //   })
  //     .then(response => {
  //       console.log("checking uom symbol", respons.data.symbol);
  //       setUOMSymbol(response.data.symbol);
  //     })
  //     .catch(error => {
  //       console.log(JSON.stringify(error));
  //     });
  // };

  useEffect(() => {
    setUOMSymbol();
  }, []);

  const [uomSymbol, setUOMSymbol2] = useState("tesaja");
  const setUOMSymbol = () => {
    Axios.get(`http://178.128.30.185:5000/api/v1/uoms/${c_uom_id}`, {
      headers: { "Content-Type": "application/json" }
    })
      .then(response => {
        console.log("checking uom symbol", response.data.data[0].symbol);
        // setUOMSymbol2(KG);
        //x =response.data.data[0].symbol;
        //console.log(x);
        setUOMSymbol2(response.data.data[0].symbol);
        console.log(uomSymbol);
      })
      .catch(error => {
        console.log(JSON.stringify(error));
      });
  };

  const deleteProduct = () => {
    const product = JSON.stringify({
      name: name,
      value: value,
      description: description,
      price: parseInt(price)
    });

    Axios.delete(`http://178.128.30.185:5000/api/v1/products/${m_product_id}`, {
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
  };

  //const {width, height} =Dimensions.get('window');
  const [name, setInputName] = useState(navigation.getParam("name"));
  const [description, setInputDescription] = useState(
    navigation.getParam("description")
  );
  const [price, setInputPrice] = useState(navigation.getParam("price"));
  const [value, setInputValue] = useState(navigation.getParam("value"));
  const [m_product_id] = useState(navigation.getParam("m_product_id"));
  const [c_uom_id] = useState(navigation.getParam("c_uom_id"));
  return (
    <SafeAreaView style={styles.updateView}>
     <View style={styles.header}>
      <FontAwesomeIcon icon={faBox} style={styles.iconUser} size={45} color={"white"}/>
        <Text style={styles.headerText}>Product</Text>
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
          {/* <Text style={styles.text}>Description</Text> */}
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

        <View style={styles.textContainer}>
          {/* <Text style={styles.text}>Description</Text> */}
          <TextInput
            style={styles.textInput}
            value={uomSymbol}
            editable={false}
            selectTextOnFocus={false}
          ></TextInput>
        </View>

        <View style={styles.textContainer}>
          {/* <Text style={styles.text}>Description</Text> */}
          <TextInput
            style={styles.textInput}
            value={price}
            onChangeText={value => setInputPrice(value)}
            placeholder="Price"
          ></TextInput>
        </View>

        <TouchableOpacity onPress={addProduct} style={styles.addButton}>
          <Text style={styles.addButtonText}>UPDATE</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteProduct} style={styles.deleteButton}>
          <Text style={styles.DeleteButtonText}>DELETE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

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
  updateView: {
    flex: 1,

  },
  addButtonText: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
    color: "#ffffff"
  },
  DeleteButtonText: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
    color: "#b00020"
  },
  addButton: {
    backgroundColor: "#b00020",
    marginVertical: 10,
    marginHorizontal: 15,
    elevation: 2,
    height: 45
  },
  deleteButton: {
    backgroundColor: "#ffffff",
    marginVertical: 10,
    marginHorizontal: 15,
    elevation: 2,
    height: 45
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

export default updateProduct;
