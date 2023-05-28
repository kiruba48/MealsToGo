import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Card } from 'react-native-paper';

export default function RestaurantInfoCard({ restaurant }) {
  const {
    name,
    icon,
    photos,
    rating,
    address,
    openingHours,
    isClosedTemporarily,
  } = restaurant;
  return (
    <View>
      <Card elevation={5} style={styles.card}>
        <Card.Cover
          key={name}
          source={{ uri: photos[0] }}
          style={styles.cardCover}
        />
        <Card.Title style={styles.CardTitle} title={name} />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
  },
  cardCover: {
    padding: 20,
    backgroundColor: 'white',
  },
  CardTitle: {
    padding: 20,
  },
});
