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
      username: username.toLowerCase,
      password: password
    });

    Axios.post("http://178.128.30.185:5000/api/v1/auth/register", auth, {
      headers: { "Content-Type": "application/json" }
    })
      .then(response => {
        console.log("checking response", response);
        navigation.navigate("LoginPage");
      })
      .catch(error => {
        console.log(JSON.stringify(error));
      });

    //    Axios.get('http://192.168.88.233:5000/api/v1/products').then(response=>{console.log(response.data)}) ;
  };
  return (
    <SafeAreaView style={styles.loginScreenContainer}>
      <View style={styles.loginTextContainer}>
        <Text style={styles.loginText}>Register</Text>
      </View>

      <View style={styles.usernameForm}>
        <TextInput
          style={styles.TextInput}
          value={username}
          onChangeText={value => setInputUsername(value)}
          placeholder="username"
        ></TextInput>
      </View>

      <View style={styles.passwordForm}>
        <TextInput
          style={styles.TextInput}
          value={password}
          onChangeText={value => setInputPassword(value)}
          placeholder="password"
          secureTextEntry={true}
        ></TextInput>
      </View>

      <TouchableOpacity
        onPress={addProduct}
        style={styles.loginButtonContainer}
      >
        <Text style={styles.loginButtonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("LoginPage")}
        style={styles.backToLogin}
      >
        <Text style={styles.backToLoginText}>Back to Login</Text>
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
    borderBottomWidth: 5,
    borderBottomColor: "black",
    borderRadius: 5
  },
  loginText: {
    fontSize: 40,
    alignSelf: "center",
    bottom: 5
  },
  usernameForm: {
    borderBottomWidth: 3,
    alignSelf: "stretch",
    marginHorizontal: 30
  },
  passwordForm: {
    top: 30,
    borderBottomWidth: 3,
    alignSelf: "stretch",
    marginHorizontal: 30
  },
  TextInput: {
    fontSize: 20
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
    fontWeight: "bold"
  },
  registerButtonContainer: {
    position: "relative",
    alignItems: "center",
    top: 110
  },
  registerText: {
    color: "#A7ADBA"
  },
  backToLogin: {
    marginVertical: "31%",
    position: "relative",
    alignSelf: "center"
  },
  backToLoginText: {
    color: "grey",
    fontSize: 15
  }
});

export default LoginScreen;
