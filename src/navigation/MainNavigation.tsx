import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styles from './styles';
import Home from '../screens/tabs/home';
import Events from '../screens/tabs/events';
import GearBuilder from '../screens/tabs/gearBuilder';
import Migration from '../screens/tabs/migration';
import HomeIcon from '../components/svgs/HomeIcon.tsx';
import EventsIcon from '../components/svgs/EventsIcon.tsx';
import BuilderIcon from '../components/svgs/BuilderIcon.tsx';
import LocationIcon from '../components/svgs/LocationIcon.tsx';

const Tab = createBottomTabNavigator();

interface ITabBarIcon {
  color: string;
}

const HomeTabBarIcon = ({color}: ITabBarIcon) => <HomeIcon color={color} />;
const EventsTabBarIcon = ({color}: ITabBarIcon) => <EventsIcon color={color} />;
const BuilderTabBarIcon = ({color}: ITabBarIcon) => (
  <BuilderIcon color={color} />
);
const MigrationTabBarIcon = ({color}: ITabBarIcon) => (
  <LocationIcon color={color} />
);

const MainNavigation = () => {
  return (
    <View style={styles.appContainer}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#0C8DAC',
            tabBarInactiveTintColor: '#053038',
          }}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{tabBarIcon: HomeTabBarIcon}}
          />
          <Tab.Screen
            name="Events"
            component={Events}
            options={{tabBarIcon: EventsTabBarIcon}}
          />
          <Tab.Screen
            name="Gear Builder"
            component={GearBuilder}
            options={{tabBarIcon: BuilderTabBarIcon}}
          />
          <Tab.Screen
            name="Migration"
            component={Migration}
            options={{tabBarIcon: MigrationTabBarIcon}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default MainNavigation;
