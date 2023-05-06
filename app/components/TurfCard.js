import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const TurfCard = ({ name, price, rating, favorited, image }) => {
  const [isFavorited, setIsFavorited] = useState(favorited);
  const navigation = useNavigation();

  const handleFavoritePress = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <TouchableOpacity onPress={() => navigation.navigate("TurfDetails")}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>{`₹${price}`}</Text>
          <View style={styles.ratingAndFavorite}>
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={16} color="#FFC107" />
              <Text style={styles.ratingText}>{rating}</Text>
            </View>
            <TouchableOpacity onPress={handleFavoritePress}>
              <Ionicons
                name={isFavorited ? 'heart' : 'heart-outline'}
                size={24}
                color={isFavorited ? '#F44336' : '#000000'}
                style={styles.favorite}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    height: 250,
    overflow: 'hidden',
  },
  imageContainer: {
    // backgroundColor:'blue',
    borderRadius: 20,
    padding:15,
    overflow: 'visible',
    borderWidth: 1,
    borderColor: '#C0C0C0',
    height: '60%',
    margin:5
 
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  detailsContainer: {
    paddingHorizontal: 0,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: 'flex-end',
    height: '40%',
  },
  name: {
    marginBottom:20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    marginBottom:20,
    fontSize: 18,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  ratingAndFavorite: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  ratingContainer: {
    marginBottom:20,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  ratingText: {
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 18,
  },
  favorite: {
    marginBottom:17,
    marginTop: 10,
  },
});

export default TurfCard;
