import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/Home';
import ProfileScreen from './screens/Profile';
import { ThemeProvider } from './context';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: '#f4511e' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        >
          <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Account' }} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Cyborg Bot' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
