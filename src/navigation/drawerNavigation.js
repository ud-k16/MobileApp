import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';
import BottomNavigation from './bottomNavigation';
import { Constants } from '../constants/constants';

const Drawer = createDrawerNavigator();

const DrawerNavigation = ({}) => {
  const screenOptions = {
    headerShown: false,
    drawerItemStyle: { display: 'none' },
  };

  return (
    <Drawer.Navigator
      initialRouteName={Constants.screen.drawerHome}
      screenOptions={() => screenOptions}
    >
      <Drawer.Screen
        name={Constants.screen.drawerHome}
        component={BottomNavigation}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({});

export default DrawerNavigation;
