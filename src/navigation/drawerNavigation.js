import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, View } from 'react-native';
import HomeScreen from '../screens/homeScreen';
import BottomNavigation from './bottomNavigation';
const Drawer = createDrawerNavigator();
const DrawerNavigation = ({}) => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={() => ({
        headerShown: false,
        drawerItemStyle: { display: 'none' },
      })}
    >
      <Drawer.Screen name="Home" component={BottomNavigation} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({});

export default DrawerNavigation;
