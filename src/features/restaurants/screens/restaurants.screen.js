import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import RestaurantInfoCard from '../components/restaurant-info.component';

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
      <View style={styles.search}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <View style={styles.list}>
        <RestaurantInfoCard restaurant={restaurant} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: 'blue',
  },
});
