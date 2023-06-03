import React from 'react';
import styled from 'styled-components/native';
import { Searchbar } from 'react-native-paper';
import RestaurantInfoCard from '../components/restaurant-info.component';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantInfoCardContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  ${'' /* background-color: ${(props) => props.theme.colors.brand.primary}; */}
`;

const restaurant = {
  name: 'Cafe Deadend',
  icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
  photos: [
    'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
  ],
  rating: 4.3,
  address: '82nd Street, New York',
  isClosedTemporarily: false,
  openingHours: {
    IsOpenNow: true,
  },
};
export default function RestaurantsScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      <RestaurantInfoCardContainer>
        <RestaurantInfoCard restaurant={restaurant} />
      </RestaurantInfoCardContainer>
    </>
  );
}
