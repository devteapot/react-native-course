import React, { useContext } from 'react';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@rneui/themed';
import { Provider as AuthProvider, Context as AuthContext } from './src/context/AuthContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as TrackProvider, Context as TrackContext } from './src/context/TrackContext';
import { FontAwesome } from '@expo/vector-icons';

const SwitchStack = createStackNavigator();
const MainTab = createBottomTabNavigator();
const LoginStack = createNativeStackNavigator();
const TrackStack = createNativeStackNavigator();

const TrackListFlow = () => {
  const { fetchTracks } = useContext(TrackContext);

  return (
    <TrackStack.Navigator>
      <TrackStack.Screen 
        name='TrackList' 
        component={TrackListScreen} 
        listeners={{ 'focus': fetchTracks }}
        options={{ title: 'Tracks' }}
      />
      <TrackStack.Screen 
        name='TrackDetail' 
        component={TrackDetailScreen} 
        options={{ headerTitle: '' }} 
      />
    </TrackStack.Navigator>
  );
}

const LoggedInFlow = () => {
  return (
    <MainTab.Navigator 
      screenOptions={{ headerShown: false }}
    >
      <MainTab.Screen 
        name='TrackListFlow' 
        component={TrackListFlow} 
        options={{ 
          title: 'Tracks', 
          tabBarIcon: () => <FontAwesome name='th-list' size={20} />
        }}  
      />
      <MainTab.Screen 
        name='TrackCreate' 
        component={TrackCreateScreen} 
        options={{ 
          title: 'Add Track', 
          tabBarIcon: () => <FontAwesome name='plus' size={20} />
        }}  
      />
      <MainTab.Screen 
        name='Account' 
        component={AccountScreen} 
        options={{ 
          tabBarIcon: () => <FontAwesome name='gear' size={20} />
        }}  
      />
    </MainTab.Navigator>
  );
}

const LoggedOutFlow = () => {
  const { clearErrorMessage } = useContext(AuthContext);

  return (
    <LoginStack.Navigator 
      screenOptions={{ headerShown: false }} 
      screenListeners={{ focus: clearErrorMessage }}
    >
      <LoginStack.Screen name='Signin' component={SigninScreen} />
      <LoginStack.Screen name='Signup' component={SignupScreen} />
    </LoginStack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <SwitchStack.Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
        <SwitchStack.Screen name='ResolveAuth' component={ResolveAuthScreen} />
        <SwitchStack.Screen name='LoggedIn' component={LoggedInFlow} />
        <SwitchStack.Screen name='LoggedOut' component={LoggedOutFlow} />
      </SwitchStack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <TrackProvider>
          <LocationProvider>
            <AuthProvider>
              <App />
            </AuthProvider>
          </LocationProvider>
        </TrackProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
