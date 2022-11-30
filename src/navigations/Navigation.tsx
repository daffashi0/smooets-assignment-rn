import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import {useSelector} from 'react-redux';
import EditProfileScreen from '../screens/EditProfile';
import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/Login';
import ProfileScreen from '../screens/Profile';
import RegisterScreen from '../screens/Register';
import ResetPasswordScreen from '../screens/ResetPassword';
import {RootState} from '../store';

export type RootStackParamList = {
  Register: {} | undefined;
  Login: {} | undefined;
  ResetPassword: {} | undefined;
  Home: {} | undefined;
  Profile: {} | undefined;
  EditProfile: {} | undefined;
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
          <Stack.Screen
            name="ResetPassword"
            component={ResetPasswordScreen}
            options={{title: 'Reset Password'}}
          />
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
          <Stack.Screen
            name="EditProfile"
            component={EditProfileScreen}
            options={{
              title: 'Edit Profile',
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigation;
