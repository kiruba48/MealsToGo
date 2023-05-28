import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import RestaurantsScreen from './src/features/restaurants/screens/restaurants.screen';

export default function App() {
  return (
    <React.Fragment>
      <SafeAreaView style={styles.container}>
        <RestaurantsScreen />
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
