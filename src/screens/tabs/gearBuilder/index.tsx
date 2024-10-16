import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AllBuilds from './AllBuilds';
import MyBuilds from './MyBuilds';

const Stack = createNativeStackNavigator();

const GearBuilder = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AllBuilds" component={AllBuilds} />
      <Stack.Screen name="MyBuilds" component={MyBuilds} />
    </Stack.Navigator>
  );
};

export default GearBuilder;
