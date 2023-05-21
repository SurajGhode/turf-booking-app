import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  useColorScheme,
  Dimensions,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {useTheme}  from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";

const AccountScreen = ({ navigation }) => {
  const deviceTheme = useColorScheme();
  const { colors } = useTheme();
  const [profilePic, setProfilePic] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleProfilePicUpload = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert(
        "Permission required",
        "Please grant permission to access your gallery."
      );
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setProfilePic(result.uri);
    }
  };

  const handleDeleteProfilePic = () => {
    setProfilePic(null);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <View style={[styles.container, darkMode && styles.darkModeContainer]}>
      <TouchableOpacity style={styles.darkModeButton} onPress={toggleDarkMode}>
        <MaterialCommunityIcons
          name={darkMode ? "white-balance-sunny" : "moon-waning-crescent"}
          size={30}
          color={colors.text}
        />
      </TouchableOpacity>

      <View
        style={[
          styles.header,
          {
            backgroundColor: darkMode ? colors.card : colors.primary,
          },
        ]}
      >
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="account"
            size={60}
            color={darkMode ? colors.text : colors.background}
          />
        </TouchableOpacity>

        <Text
          style={[
            styles.name,
            {
              color: darkMode ? colors.text : colors.background,
            },
          ]}
        >
         Suraj
        </Text>

        <Text
          style={[
            styles.email,
            {
              color: darkMode ? colors.text : colors.background,
            },
          ]}
        >
          suraj@gmail.com
        </Text>
      </View>

      <View style={[styles.menu, { backgroundColor: colors.card }]}>
        <Text style={[styles.menuTitle, { color: colors.text }]}>
          My Account
        </Text>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('PaymentMethods')}
        >
          <MaterialCommunityIcons
            name="credit-card-outline"
            size={25}
            color={colors.text}
          />
          <Text style={[styles.menuItemText, { color: colors.text }]}>
            Payment Methods
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Bookings')}
        >
          <MaterialCommunityIcons
            name="calendar-check-outline"
            size={25}
            color={colors.text}
          />
          <Text style={[styles.menuItemText, { color: colors.text }]}>
            {" "}
            Bookings
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('EditProfile')}
        >
          <MaterialCommunityIcons
            name="account-edit-outline"
            size={25}
            color={colors.text}
          />
          <Text style={[styles.menuItemText, { color: colors.text }]}>
            Edit Profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Favourites')}
        >
          <MaterialCommunityIcons
            name="heart-outline"
            size={25}
            color={colors.text}
          />
          <Text style={[styles.menuItemText, { color: colors.text }]}>
            Favourites
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => toggleDarkMode()}
        >
          <MaterialCommunityIcons
            name="moon-waning-crescent"
            size={25}
            color={colors.text}
          />
          <Text style={[styles.menuItemText, { color: colors.text }]}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Logout')}
        >
          <MaterialCommunityIcons name="logout" size={25} color={colors.text} />
          <Text style={[styles.menuItemText, { color: colors.text }]}>
            Logout
          </Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  darkModeContainer: {
    backgroundColor: "#000",
  },
  darkModeButton: {
    position: "absolute",
    top: 50,
    right: 20,
  },

  header: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  email: {
    fontSize: 16,
    marginTop: 5,
  },
  menu: {
    flex: 1,
    width: "100%",
    padding: 20,
    marginTop: 20,
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  menuItemText: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default AccountScreen;
