import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import * as ImagePicker from 'expo-image-picker';



const EditProfileScreen = () => {
  const [name, setName] = useState("Suraj");
  const [email, setEmail] = useState("''@example.com");
  const [phone, setPhone] = useState("1234567890");
  const [profilePic, setProfilePic] = useState(require("../assets/default-profile-pic.jpg"));

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setProfilePic({ uri: result.uri });
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.profilePicContainer} onPress={pickImage}>
        <Image source={profilePic} style={styles.profilePic} />
        <Text style={styles.edit}>Edit</Text>
      </TouchableOpacity>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={(text) => setPhone(text)}
      />
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveText}>Save Changes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.deleteButton}>
        <Text style={styles.deleteText}>Delete Account</Text>
        
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
  profilePicContainer: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  edit: {
    marginTop: 10,
    color: "#2980b9",
    fontWeight: "bold",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 3,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 16,
    marginBottom: 1,
    borderRadius:20
  },
  deleteButton: {
    backgroundColor: "#e74c3c",
    borderRadius: 50,
    paddingVertical: 10,
    marginTop:25,
    alignItems: "center",
  },
  deleteText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: "#2980b9",
    borderRadius: 50,
    paddingVertical: 10,
    marginTop: 25,
    alignItems: "center",
  },
  saveText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  
});

export default EditProfileScreen;
