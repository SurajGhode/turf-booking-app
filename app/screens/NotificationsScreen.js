import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <View style={styles.notification}>
        <Text style={styles.notificationTitle}>Booking Confirmed</Text>
        <Text style={styles.notificationText}>Your booking for Turf 1 at 10am on 27 April has been confirmed.</Text>
      </View>
      <View style={styles.notification}>
        <Text style={styles.notificationTitle}>Payment Reminder</Text>
        <Text style={styles.notificationText}>Please complete the payment for your booking on Turf 2 at 3pm on 28 April.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  notification: {
    marginBottom: 20,
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 5,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  notificationText: {
    fontSize: 16,
  },
});

export default NotificationsScreen;
