import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import { Provider } from './src/context/BlogContext';
import { Feather, EvilIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Index' 
        screenOptions={{ title: "Blogs" }}
      >
        <Stack.Screen
          name="Index" 
          component={IndexScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Create")}
              >
                <Feather name='plus' size={30} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Show" 
          component={ShowScreen}
          options={({ navigation, route }) => ({
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Edit", { postId: route.params.postId })}
              >
                <EvilIcons name='pencil' size={35} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Create" 
          component={CreateScreen}
        />
        <Stack.Screen
          name="Edit" 
          component={EditScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => (
  <Provider>
    <App />
  </Provider>
);
