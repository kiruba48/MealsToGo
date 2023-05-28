import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import RestaurantInfo from '../components/restaurant-info.component';

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
        <RestaurantInfo />
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
