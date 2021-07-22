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

    const [bp_id,setInputC_partnerID] = useState(navigation.getParam("data"));
   // const x = JSON.stringify(navigation.getParam("data"));
    const [address,setAddress]=useState("");

    useEffect(() => {
      getCountry();
      getRegion();
      getCity();
      getDistrict();
    }, []);
    const [bpcountrylist, setbpcountrylist] = useState([]);
    const [selectedCountry, setSelectedCountrylist] = useState();

    const [bpRegionList, setbpregionlist] = useState([]);
    const [selectedRegion, setSelectedRegionlist] = useState();

    const [bpCityList, setbpcitylist] = useState([]);
    const [selectedCity, setSelectedCitylist] = useState();

    const [bpDistricList, setbpdistrictlist] = useState([]);
    const [selectedDistrict, setSelectedDistrictlist] = useState();

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

    const addBPLocation = () => {
      const BPLocation = JSON.stringify({
        c_country_id: selectedCountry,
        c_region_id: selectedRegion,
        c_city_id: selectedCity,
        c_district_id: selectedDistrict,
        address: address,
        c_partner_id:bp_id
      });


    Axios.post(`http://178.128.30.185:5000/api/v1/partners/${bp_id}/locations`, BPLocation, {
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
          <Text style={styles.headerText}>BPartners Location</Text>
        </View>

            <View style={styles.textContainer}>
            <Text>Country</Text>

          <View style={styles.textContainer}>
            {/* <Text style={styles.text}>Price</Text> */}
            <View style={styles.pickerInput}>
              <Picker
                style={styles.pickerText}
                selectedValue={bpcountrylist}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedCountrylist(itemValue)
                }
              >
                {bpcountrylist.map(item => {
                  console.log(item);
                  return (
                    <Picker.Item
                      key={item.c_country_id}
                      label={item.name}
                      value={item.c_country_id}
                    />
                  );
                })}
              </Picker>
            </View>
          </View>
          <Text>Region</Text>
          <View style={styles.textContainer}>
            {/* <Text style={styles.text}>Price</Text> */}
            <View style={styles.pickerInput}>
              <Picker
                style={styles.pickerText}
                selectedValue={bpRegionList}
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
          </View>

          
          <Text>City</Text>
          <View style={styles.textContainer}>
            {/* <Text style={styles.text}>Price</Text> */}
            <View style={styles.pickerInput}>
              <Picker
                style={styles.pickerText}
                selectedValue={bpCityList}
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
              placeholder="address"
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
