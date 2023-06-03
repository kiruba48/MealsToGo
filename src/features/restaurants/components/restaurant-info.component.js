import React from 'react';
import styled from 'styled-components/native';
import { Card, Text } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';

// Assets
import StarIcon from '../../../../assets/star';
import OpenIcon from '../../../../assets/open';

const InfoCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-top: ${(props) => props.theme.space[3]};
  position: relative;
`;
const InfoCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Ratings = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const Section = styled.View`
  position: absolute;
  right: ${(props) => props.theme.space[2]};
  top: ${(props) => props.theme.space[4]};
  flex-direction: row;
`;

const OpenInfo = styled.View`
  margin: ${(props) => props.theme.space[2]};
`;

const TypeInfo = styled.Image`
  width: 30px;
  height: 30px;
  margin: ${(props) => props.theme.space[2]};
`;

const ClosedText = styled(Text)`
  color: ${(props) => props.theme.colors.ui.error};
  margin: ${(props) => props.theme.space[1]};
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
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
      <Info>
        <Title>{name}</Title>
        <Ratings>
          {Array(Math.floor(rating))
            .fill(0)
            .map((_, index) => (
              <SvgXml key={index} xml={StarIcon} width={20} height={20} />
            ))}
        </Ratings>
        <Section>
          <OpenInfo>
            {isClosedTemporarily ? (
              <ClosedText variant="labelLarge">CLOSED</ClosedText>
            ) : (
              <SvgXml xml={OpenIcon} width={30} height={30} />
            )}
          </OpenInfo>
          <TypeInfo source={{ uri: icon }} />
        </Section>

        <Address>{address}</Address>
      </Info>
    </InfoCard>
  );
}
