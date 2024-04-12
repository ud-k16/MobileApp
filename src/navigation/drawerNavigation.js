import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';
import BottomNavigation from './bottomNavigation';
import { Constants } from '../constants/constants';
import DrawerContent from '../components/drawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigation = ({}) => {
  const screenOptions = {
    headerShown: false,
  };

  return (
    <Drawer.Navigator
      initialRouteName={Constants.screen.drawerHome}
      screenOptions={() => screenOptions}
      drawerContent={() => <DrawerContent />}
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
