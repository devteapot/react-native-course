import React, { useContext, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@rneui/themed';
import { Provider as AuthProvider, Context as AuthContext } from './src/context/AuthContext';


const MainTab = createBottomTabNavigator();
const LoginStack = createNativeStackNavigator();
const TrackStack = createNativeStackNavigator();

const TrackListFlow = () => {
  return (
    <TrackStack.Navigator>
      <TrackStack.Screen name='TrackList' component={TrackListScreen} />
      <TrackStack.Screen name='TrackDetail' component={TrackDetailScreen} />
    </TrackStack.Navigator>
  );
}

const App = () => {
  const { state, clearErrorMessage } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {state.token !== null
        ? (
          <MainTab.Navigator>
            <MainTab.Screen name='Account' component={AccountScreen} />
            <MainTab.Screen name='TrackCreate' component={TrackCreateScreen} />
            <MainTab.Screen name='TrackListFlow' component={TrackListFlow} />
          </MainTab.Navigator>
        ) : (
          <LoginStack.Navigator 
            screenOptions={{ headerShown: false }} 
            screenListeners={{ focus: clearErrorMessage }}
          >
            <LoginStack.Screen name='ResolveAuth' component={ResolveAuthScreen} />
            <LoginStack.Screen name='Signup' component={SignupScreen} />
            <LoginStack.Screen name='Signin' component={SigninScreen} />
          </LoginStack.Navigator>
        )
      }
    </NavigationContainer>
  );
}

export default () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({

});
