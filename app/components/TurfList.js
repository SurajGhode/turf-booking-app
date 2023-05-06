import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import TurfCard from './TurfCard';

const TurfList = ({ data }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TurfCard {...item} />}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingVertical: 10,
    paddingBottom: 80, // add extra padding at the bottom
  },
});

export default TurfList;
