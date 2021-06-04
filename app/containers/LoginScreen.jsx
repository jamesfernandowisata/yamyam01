import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { Item } from "native-base";

const LoginScreen = ({ navigation }) => {
  const [username, setInputUsername] = useState("");
  const [password, setInputPassword] = useState("");

  return (
    <View style={styles.loginScreenContainer}>
      <View style={styles.loginTextContainer}>
        <Text style={styles.loginText}>Login</Text>
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
        onPress={() => navigation.navigate("Navigation")}
        style={styles.loginButtonContainer}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.registerButtonContainer}>
        <Text style={styles.registerText}>Register now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  loginScreenContainer: {
    flex: 1
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
  }
});

export default LoginScreen;
