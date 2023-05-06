import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

const FavouritesScreen = () => {
  const [favourites, setFavourites] = useState([
    {
      id: "1",
      name: "Turf X",
      location: "123 Main Street",
      rating: 4.5,
      image: require("../assets/turf1.jpg"),
    },
    {
      id: "2",
      name: "Turf Y",
      location: "456 Main Street",
      rating: 4.8,
      image: require("../assets/turf2.jpg"),
    },
    {
      id: "3",
      name: "Turf Z",
      location: "789 Main Street",
      rating: 4.2,
      image: require("../assets/turf3.jpg"),
    },
  ]);

  const renderFavouriteItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={item.image} style={styles.turfImage} />
      <View style={styles.detailsContainer}>
        <Text style={styles.turfName}>{item.name}</Text>
        <Text style={styles.turfLocation}>{item.location}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {favourites.length === 0 ? (
        <Text style={styles.emptyText}>You have no favourite turfs yet.</Text>
      ) : (
        <FlatList
          data={favourites}
          keyExtractor={(item) => item.id}
          renderItem={renderFavouriteItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  card: {
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  turfImage: {
    width: 70,
    height: 70,
    borderRadius: 5,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
  },
  turfName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  turfLocation: {
    fontSize: 14,
    color: "#555",
  },
  ratingContainer: {
    backgroundColor: "#e67e22",
    borderRadius: 10,
    padding: 5,
    marginTop: 5,
    width: 40,
    alignItems: "center",
  },
  ratingText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  emptyText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 50,
  },
});

export default FavouritesScreen;
