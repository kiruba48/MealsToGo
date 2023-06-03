import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

const InfoCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const InfoCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const Title = styled.Text`
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
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
