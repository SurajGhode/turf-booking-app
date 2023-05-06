import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TurfDetailsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{ uri: 'https://via.placeholder.com/300' }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.detailsContainer}>
        <View style={styles.topDetails}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>ABC Turf</Text>
            <Ionicons name="heart" size={24} color="#FF0000" />
          </View>
          <Text style={styles.rating}>4.5</Text>
        </View>
        <Text style={styles.price}>₹1500 / Hour</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius, magna nec rhoncus elementum, elit velit posuere augue, eget pharetra orci justo a ante. Aliquam et urna non elit posuere venenatis.
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.bookButton}>
            <Text style={styles.bookButtonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  image: {
    height: 200,
  },
  detailsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  topDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 10,
  },
  rating: {
    fontSize: 16,
    color: '#FFC107',
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bookButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default TurfDetailsScreen;
    