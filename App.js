import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StatusBar, SafeAreaView } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import RestaurantsScreen from './src/features/restaurants/screens/restaurants.screen';
import { theme } from './src/infrastructure/theme';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}`};
`;
export default function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <SafeArea>
          <RestaurantsScreen />
        </SafeArea>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </React.Fragment>
  );
}
