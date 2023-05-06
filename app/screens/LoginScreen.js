import React, { useState,axios } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError]=useState('')
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin =  () => {
    // try {
    //   const response = await fetch('http://127.0.0.1:5000/auth/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       email: email,
    //       password: password
    //     })
    //   });

    //   if (response.ok) {
        navigation.navigate("Home");
    //   } else {
    //     const data = await response.json();
    //     setError(data.message);
    //   }
    // } catch (error) {
    //   setError('An error occurred. Please try again later.');
    // }
  };

  const handleRegister = () => {
    // axios.post('/api/register', { email: email, password: password })
    //   .then(response => {
    //     console.log('Registration successful');
        navigation.navigate('Registration');
      // })
      // .catch(error => {
      //   console.error('Registration failed');
      // });
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic here
    // You can navigate to the password reset screen or trigger password reset API
    navigation.navigate("ForgotPasswordScreen");
    // Alert.alert('Forgot Password', 'Password reset functionality to be implemented');
  };

  const handleShowPassword = () => {
    // Toggle show/hide password
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="soccer" size={150} color="black" />
        <Text style={styles.iconText}></Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry={!showPassword}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <TouchableOpacity
          onPress={handleShowPassword}
          style={styles.showPasswordIcon}
        >
          <Ionicons
            name={showPassword ? "eye-off" : "eye"}
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.linkText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.linkText}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    marginBottom: 100,
  },
  iconContainer: {
    flex: 1,
    marginTop: 30,
    alignItems: "center",
  },
  icon: {
    width: 150,
    height: 150,
  },
  iconText: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 10,
    color: "black",
    textAlign: "center",
  },
  inputContainer: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 10,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 8,
    fontSize: 16,
    marginTop: 30,
  },
  passwordContainer: {
    width: "100%",
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
  },
  showPasswordIcon: {
    paddingHorizontal: 8,
  },
  button: {
    width: "100%",
    height: 50,
    borderRadius: 25,
    backgroundColor: "#3f51b5",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  linkText: {
    marginTop: 20,
    color: "blue",
    textDecorationLine: "underline",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LoginScreen;
