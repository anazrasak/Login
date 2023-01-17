import React from 'react';


import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {FirstPage} from '../screens';

const Stack = createStackNavigator();

const Navigators = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="FirstPage" component={FirstPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;
