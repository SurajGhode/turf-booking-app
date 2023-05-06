import React from 'react';
import { View, Text, TextInput, TouchableOpacity,StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const handleRegister = () => {
  // perform registration logic here
  // ...

  // navigate to home screen
   navigation.navigator("HomeScreen")
};


const RegistrationForm = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Text style={styles.imageText}>Register</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Icon name="person" size={24} color="#ccc" style={styles.inputIcon} />
          <TextInput placeholder="Name" style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="email" size={24} color="#ccc" style={styles.inputIcon} />
          <TextInput placeholder="Email" keyboardType='email-address' style={styles.input} />
         
        </View>
        <View style={styles.inputContainer}>
          <Icon name="phone" size={24} color="#ccc" style={styles.inputIcon} />
          <TextInput placeholder="Mobile Number" keyboardType='numeric' style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="lock" size={24} color="#ccc" style={styles.inputIcon} />
          <TextInput placeholder="Password" secureTextEntry={true} style={styles.input} />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
          

        </TouchableOpacity>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    padding: 20,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  formContainer: {
    flex: 3,
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 8,
    fontSize: 16,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
    padding: 10,
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: 25,
    backgroundColor: '#3f51b5',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});
export default RegistrationForm;