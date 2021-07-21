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
import { Picker } from "@react-native-picker/picker";
//import { SafeAreaView } from "react-navigation";

function updateBP({ navigation }) {

  useEffect(() => {
    getCountry();
    getRegion();
    getCity();
    getDistrict();
  }, []);
  const addBP = () => {
    const product = JSON.stringify({
        c_country_id: selectedCountry,
        c_region_id: selectedRegion,
        c_city_id: selectedCity,
        c_district_id: selectedDistrict,
        address: selectAddress,
        c_partner_id:bp_id
      //price: parseInt(price)
    });

    Axios.put(
      `http://178.128.30.185:5000/api/v1/partners/${m_partners_id}`,
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

  //const {width, height} =Dimensions.get('window');
  const [m_partners_id] = useState(navigation.getParam("m_partners_id"));

  const [current_country] = useState(navigation.getParam("c_country_id"));
  const [current_region] = useState(navigation.getParam("c_region_id"));
  const [current_city] = useState(navigation.getParam("c_city_id"));
  const [current_district] = useState(navigation.getParam("c_district_id"));
  const [current_address] = useState(navigation.getParam("address"));


    const [bpcountrylist, setbpcountrylist] = useState([]);
    const [selectedCountry, setSelectedCountrylist] = useState();

    const [bpRegionList, setbpregionlist] = useState([]);
    const [selectedRegion, setSelectedRegionlist] = useState();

    const [bpCityList, setbpcitylist] = useState([]);
    const [selectedCity, setSelectedCitylist] = useState();

    const [bpDistricList, setbpdistrictlist] = useState([]);
    const [selectedDistrict, setSelectedDistrictlist] = useState();
    const [address, setAddress] =useState();

    const getCountry = () => {
      Axios.get("http://178.128.30.185:5000/api/v1/countries ")
        .then(response => {
          console.log("check", response.data);
          setbpcountrylist(response.data.data);
        })
        .catch(error => {
          console.log(JSON.stringify(error));
        });
    };
    const getRegion = () => {
      Axios.get("http://178.128.30.185:5000/api/v1/regions ")
        .then(response => {
          console.log("check", response.data);
          setbpregionlist(response.data.data);
        })
        .catch(error => {
          console.log(JSON.stringify(error));
        });
    };
      
    const getCity = () => {
      Axios.get("http://178.128.30.185:5000/api/v1/cities ")
        .then(response => {
          console.log("check", response.data);
          setbpcitylist(response.data.data);
        })
        .catch(error => {
          console.log(JSON.stringify(error));
        });
    };

    const getDistrict = () => {
      Axios.get("http://178.128.30.185:5000/api/v1/districts ")
        .then(response => {
          console.log("check", response.data);
          setbpdistrictlist(response.data.data);
        })
        .catch(error => {
          console.log(JSON.stringify(error));
        });
    };


  return (
    <SafeAreaView style={styles.updateView}>
      <SafeAreaView style={styles.header}>
        <Text style={styles.headerText}>Partners Location</Text>
      </SafeAreaView>
      <View style={styles.inputForm}>
      <View style={styles.pickerInput}>
              <Picker
                style={styles.pickerText}
                selectedValue={bpRegionList}
                placeholder={current_region}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedRegionlist(itemValue)
                }
              >
                {bpRegionList.map(item => {
                  console.log(item);
                  return (
                    <Picker.Item
                      key={item.c_region_id}
                      label={item.name}
                      value={item.c_region_id}
                    />
                  );
                })}
              </Picker>
            </View>

            
      <Text>City</Text>
          <View style={styles.textContainer}>
            {/* <Text style={styles.text}>Price</Text> */}
            <View style={styles.pickerInput}>
              <Picker
                style={styles.pickerText}
                selectedValue={bpCityList}
                placeholder={current_city}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedCitylist(itemValue)
                }
              >
                {bpCityList.map(item => {
                  console.log(item);
                  return (
                    <Picker.Item
                      key={item.c_city_id}
                      label={item.name}
                      value={item.c_city_id}
                    />
                  );
                })}
              </Picker>
            </View>
          </View>
          <Text>District</Text>
          <View style={styles.textContainer}>
            {/* <Text style={styles.text}>Price</Text> */}
            <View style={styles.pickerInput}>
              <Picker
                style={styles.pickerText}
                selectedValue={bpDistricList}
                placeholder={current_region}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedDistrictlist(itemValue)
                }
              >
                {bpDistricList.map(item => {
                  console.log(item);
                  return (
                    <Picker.Item
                      key={item.c_district_id}
                      label={item.name}
                      value={item.c_district_id}
                    />
                  );
                })}
              </Picker>
            </View>
          </View>



          <View style={styles.textContainer}>
            {/* <Text style={styles.text}>Name</Text> */}
            <TextInput
              style={styles.textInput}
              value={address}
              onChangeText={value => setAddress(value)}
              placeholder={current_address}
            ></TextInput>
          </View>

        <TouchableOpacity onPress={addBP} style={styles.addButton}>
          <Text style={styles.addButtonText}>UPDATE</Text>
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

export default updateBP;
