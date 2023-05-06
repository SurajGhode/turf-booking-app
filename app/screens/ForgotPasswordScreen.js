import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = ({navigation}) => {
  const [email, setEmail] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <MaterialIcons name="lock" size={80} color="gray" />
        <Text style={{ fontSize: 24, marginTop: 16, fontWeight: 'bold' }}>
          Forgot Password?
        </Text>
        <Text style={{ fontSize: 16, marginTop: 16, textAlign: 'center' }}>
          Enter your email address below to reset your password.
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.inputContainer}>
          <MaterialIcons name="email" size={24} color="#ccc" style={{ marginRight: 8 }} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            placeholderTextColor="gray"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          {email.length > 0 && (
            <TouchableOpacity onPress={() => setEmail('')}>
              <MaterialIcons name="cancel" size={24} color="#ccc" />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Go back to Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 16,
  },
  inputContainer: {
    width: '100%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 8,
    fontSize: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 8,
    fontSize: 18,
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
    fontWeight: 'bold',
    textAlign:'center'
  },
  link: {
    marginTop: 30,
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: 16,
    fontWeight:'bold'
  },
});

export default ForgotPasswordScreen;
