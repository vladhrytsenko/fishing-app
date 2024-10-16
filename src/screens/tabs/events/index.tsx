import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EventOrganization from './EventOrganization';
import CreateEvent from './CreateEvent';

const Stack = createNativeStackNavigator();

const Events = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="EventOrganization" component={EventOrganization} />
      <Stack.Screen name="CreateEvent" component={CreateEvent} />
    </Stack.Navigator>
  );
};

export default Events;
