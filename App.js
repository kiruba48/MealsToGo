import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StatusBar, SafeAreaView } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import RestaurantsScreen from './src/features/restaurants/screens/restaurants.screen';
import { theme } from './src/infrastructure/theme';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}`};
`;

export default function App() {
  let [oswaldFontLoaded] = useOswald({
    Oswald_400Regular,
  });
  let [latoFontLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldFontLoaded || !latoFontLoaded) {
    return null;
  }

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
