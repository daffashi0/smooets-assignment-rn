import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StrictMode} from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import LoginScreen from './src/screens/Login';
import RegisterScreen from './src/screens/Register';
import store from './src/store';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <StrictMode>
      <ReduxProvider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ReduxProvider>
    </StrictMode>
  );
};

export default App;
