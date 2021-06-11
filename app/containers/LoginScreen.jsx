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

const LoginScreen = ({ navigation }) => {
  const [username, setInputUsername] = useState("");
  const [password, setInputPassword] = useState("");

  const addProduct = () => {
    const auth = JSON.stringify({
      username: username,
      password: password
    });

    Axios.post("http://178.128.30.185:5000/api/v1/auth/login", auth, {
      headers: { "Content-Type": "application/json" }
    })
      .then(response => {
        console.log("checking response", response);
        if (response.status === 200) {
          navigation.navigate("App");
        } else {
        }
      })
      .catch(error => {
        console.log(JSON.stringify(error));
      });

    //    Axios.get('http://192.168.88.233:5000/api/v1/products').then(response=>{console.log(response.data)}) ;
  };
  return (
    <SafeAreaView style={styles.loginScreenContainer}>
      <View style={styles.loginTextContainer}>
        <Text style={styles.loginText}>Login</Text>
      </View>

      <View style={styles.textYamYamContainer}>
        <Text style={styles.textYamYam}> YamYam!</Text>
      </View>

      <View style={styles.usernameForm}>
        <TextInput
          style={styles.TextInput}
          value={username}
          onChangeText={value => setInputUsername(value)}
          autoCapitalize="none"
          placeholder="username"
        ></TextInput>
      </View>

      <View style={styles.passwordForm}>
        <TextInput
          style={styles.TextInput}
          value={password}
          onChangeText={value => setInputPassword(value)}
          placeholder="password"
          autoCapitalize="none"
          secureTextEntry={true}
        ></TextInput>
      </View>

      <TouchableOpacity
        onPress={addProduct}
        style={styles.loginButtonContainer}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("register")}
        style={styles.registerButtonContainer}
      >
        <Text style={styles.registerText}>Register now</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loginScreenContainer: {
    flex: 1,
    marginTop: "7%"
  },
  loginTextContainer: {
    marginBottom: 80,
    marginTop: 10,
    borderRadius: 5
  },
  loginText: {
    fontSize: 25,
    alignSelf: "flex-start",
    marginHorizontal: 15,
    bottom: 5,
    color: "grey"
  },
  usernameForm: {
    marginTop: "10%",
    borderWidth: 3,
    alignSelf: "stretch",
    marginHorizontal: 15,
    borderRadius: 15,
    height: 40
  },
  passwordForm: {
    marginVertical: 25,
    borderWidth: 3,
    alignSelf: "stretch",
    marginHorizontal: 15,
    borderRadius: 15,
    height: 40
  },
  TextInput: {
    fontSize: 20,
    marginHorizontal: 5,
    alignContent: "center"
  },
  loginButtonContainer: {
    position: "relative",
    alignItems: "center",
    top: 100,
    backgroundColor: "skyblue",
    marginHorizontal: 100,
    borderRadius: 3
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black"
  },
  registerButtonContainer: {
    position: "relative",
    alignItems: "center",
    top: 110
  },
  registerText: {
    color: "#A7ADBA"
  },
  textYamYamContainer: {
    marginVertical: 5
  },
  textYamYam: {
    color: "red",
    fontSize: 50,
    fontWeight: "bold",
    alignSelf: "center"
  }
});

export default LoginScreen;
