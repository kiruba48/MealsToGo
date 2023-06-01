import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

const InfoCard = styled(Card)`
  background-color: white;
`;
const InfoCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;
const Title = styled.Text`
  padding: 16px;
`;
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
    <InfoCard elevation={5}>
      <InfoCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </InfoCard>
  );
}
