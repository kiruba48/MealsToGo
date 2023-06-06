import React from 'react';
import { SvgXml } from 'react-native-svg';
import { Text } from '../../../../components/typography/text.component';
import {
  Address,
  ClosedText,
  Info,
  InfoCard,
  InfoCardCover,
  OpenInfo,
  Ratings,
  Section,
  TypeIcon,
} from './restaurant-info.styles';

// Assets
import StarIcon from '../../../../../assets/star';
import OpenIcon from '../../../../../assets/open';

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
        <Text variant="label">{name}</Text>
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
              <ClosedText variant="error">CLOSED</ClosedText>
            ) : (
              <SvgXml xml={OpenIcon} width={30} height={30} />
            )}
          </OpenInfo>
          <TypeIcon source={{ uri: icon }} />
        </Section>

        <Address>{address}</Address>
      </Info>
    </InfoCard>
  );
}
