import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import {useSelector} from 'react-redux';
import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/Login';
import ProfileScreen from '../screens/Profile';
import RegisterScreen from '../screens/Register';
import {RootState} from '../store';

export type RootStackParamList = {
  Register: {} | undefined;
  Login: {} | undefined;
  Home: {} | undefined;
  Profile: {} | undefined;
};

export type NavigationStackProp = NativeStackNavigationProp<RootStackParamList>;
export type NavigationProp = {
  navigation: NavigationStackProp;
};

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const {isAuth} = useSelector((state: RootState) => state.user);
  return (
    <NavigationContainer>
      {!isAuth ? (
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#222',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#222',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigation;
