import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';

import OnboardingScreen from './app/OnboardingScreen'; 
import NextScreen from './app/NextScreen'; 

const Stack = createNativeStackNavigator();

export default function App() {
  const [isFontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Poppins': require('./assets/fonts/Poppins/Poppins-Regular.ttf'), 
      });
      setFontLoaded(true);
    };

    loadFonts();
  }, []);

  if (!isFontLoaded) {
    return null; 
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
      <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Next Screen" component={NextScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
