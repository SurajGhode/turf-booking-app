import React, { useEffect } from 'react';
import { ImageBackground, StyleSheet, View, Image,Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

function SplashScreen() {

  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: null,
      headerTitle: null,
    });
  }, [navigation]);

  useEffect(() => {
    // Navigate to the home screen after 3 seconds
    const timeout = setTimeout(() => {
      navigation.navigate("Login");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/bg.jpg')}
    >
       <View style={styles.iconContainer}>
        <Icon name="soccer" size={150} color="white" />
            <Text style={styles.iconText}></Text>
        </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    
  },
  logo: {
    width: 200,
    height: 150,

  },
  iconContainer: {
    flex: 1,
    justifyContent: "center",
    marginTop:150,
    alignItems: "center",
  },
  iconText: {
   
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 20,
    color: "white",
  },
  
});

export default SplashScreen;
