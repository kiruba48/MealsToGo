import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StatusBar, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import RestaurantsScreen from './src/features/restaurants/screens/restaurants.screen';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}`};
`;
export default function App() {
  return (
    <React.Fragment>
      <SafeArea>
        <RestaurantsScreen />
      </SafeArea>
      <ExpoStatusBar style="auto" />
    </React.Fragment>
  );
}
