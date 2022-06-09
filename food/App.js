import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultShowScreen from './src/screens/ResultShowScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Search'>
        <Stack.Screen
          name="Search" 
          component={SearchScreen} 
          options={{ title: 'Business Search' }} 
        />
        <Stack.Screen
          name="ResultShow" 
          component={ResultShowScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
