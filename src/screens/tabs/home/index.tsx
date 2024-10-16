import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FishMasterExplorer from './FishMasterExplorer';
import CheckFishHealth from './CheckFishHealth';
import CreatePhoto from './CreatePhoto/CreatePhoto';

const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="FishMasterExplorer" component={FishMasterExplorer} />
      <Stack.Screen
        name="CheckFishHealth"
        component={CheckFishHealth}
        initialParams={{source: null}}
      />
      <Stack.Screen name="CreatePhoto" component={CreatePhoto} />
    </Stack.Navigator>
  );
};

export default Home;
