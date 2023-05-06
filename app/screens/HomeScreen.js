import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TurfCard from '../components/TurfCard';


const HomeScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // call your refresh function here
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.locationContainer}>
          <Ionicons name="location" size={24} color="#FFFFFF" />
          <Text style={styles.locationText}>Current Location</Text>
        </View>

        <View style={styles.searchContainer}>
          <Ionicons
            name="search"
            size={24}
            color="#000"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#A6A6A6"
          />
        </View>
      </View>
      <ScrollView
        style={styles.content}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.turfList}>
          <TouchableOpacity onPress={() => navigation.navigate("TurfDetails")}>
            <TurfCard
              name="ABC Turf"
              price="1500"
              rating="4.5"
              favorited={true}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("TurfDetails")}>
            <TurfCard
              name="XYZ Turf"
              price="2000"
              rating="4.8"
              favorited={false}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("TurfDetails")}>
            <TurfCard
              name="PQR Turf"
              price="1800"
              rating="4.6"
              favorited={true}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("TurfDetails")}>
            <TurfCard
              name="MNO Turf"
              price="2500"
              rating="4.9"
              favorited={false}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.bottomTabBar}>
        <TouchableOpacity
          style={styles.tabs}
          onPress={onRefresh}
        >
          <Ionicons name="home" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabs}
          onPress={() => navigation.navigate("Map")}
        >
          <Ionicons name="map" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabs}
          onPress={() => navigation.navigate("Notification")}
        >
          <Ionicons name="notifications" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabs}
          onPress={() => navigation.navigate("Account")}
        >
          <Ionicons name="person" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  bottomTabBar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 50,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopColor: "#CCCCCC",
    borderTopWidth: 1,
  },
  header: {
    backgroundColor: "#FFF",
    paddingTop: 50,
    paddingBottom: 10,
    paddingHorizontal: 20,
    borderBottomColor: "#E5E5E5",
    borderBottomWidth: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4CAF50",
    padding: 5,
    borderRadius: 50,
    marginBottom: 10,
  },
  locationIcon: {
    marginRight: 10,
  },
  locationText: {
    fontSize: 13,
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E0E0E0",
    borderRadius: 5,
    marginBottom: 10,
  },
  searchInput: {
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    padding: 10,
    paddingLeft: 50,
    fontSize: 16,
    color: "#000",
  },
  searchIcon: {
    position: "absolute",
    top: 18,
    left: 28,
  },
  turfList: {
    flex: 1,
    padding: 20,
  },
  searchButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 51,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    marginHorizontal: 50,
  },
  startButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 5,
  },
  tabIcon: {
    marginBottom: 5,
  },
  tabText: {
    fontSize: 12,
  },
});

export default HomeScreen;
