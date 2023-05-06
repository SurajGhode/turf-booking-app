import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity, SafeAreaView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";



function BookingsScreen() {
  const { colors } = useTheme();

  const [bookings, setBookings] = useState([
    { id: "1", name: "Turf A", date: "05/15/2023", time: "10:00 AM - 12:00 PM" },
    { id: "2", name: "Turf B", date: "05/18/2023", time: "02:00 PM - 04:00 PM" },
    { id: "3", name: "Turf C", date: "05/20/2023", time: "06:00 PM - 08:00 PM" },
  ]);

  const deleteBooking = (id) => {
    const updatedBookings = bookings.filter((booking) => booking.id !== id);
    setBookings(updatedBookings);
  };

  const renderBookingItem = ({ item }) => {
    return (
     
      <TouchableOpacity
        style={[styles.bookingItem, { backgroundColor: colors.card }]}
        onPress={() => alert("View booking details")}
      >
        <View style={styles.bookingInfo}>
          <Text style={[styles.bookingName, { color: colors.text }]}>
            {item.name}
          </Text>
          <Text style={[styles.bookingDateTime, { color: colors.text }]}>
            {item.date}, {item.time}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => deleteBooking(item.id)}
        >
          <MaterialCommunityIcons
            name="delete"
            size={25}
            color="#e53935"
          />
        </TouchableOpacity>
      </TouchableOpacity>
      
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <FlatList
        data={bookings}
        renderItem={renderBookingItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  bookingItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  bookingInfo: {
    flex: 1,
  },
  bookingName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  bookingDateTime: {
    fontSize: 16,
    marginTop: 5,
  },
  deleteButton: {
    marginLeft: 10,
  },
});

export default BookingsScreen;
