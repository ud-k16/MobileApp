import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NoInternet from '../screens/noInternetScreen';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import HomeScreen from '../screens/homeScreen';
import Header from './header';
import { Constants } from '../constants/constants';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const screenOptions = (route) => ({
    header: (props) => <Header {...props} />,
    tabBarIcon: tabBarIcon(route),
  });

  const tabBarIcon = (route) => () => {
    return route.name === Constants.screen.home ? (
      <Entypo
        name={Constants.icon.home}
        size={24}
        color={Constants.iconColor.black}
      />
    ) : (
      <MaterialIcons
        name={Constants.icon.stores}
        size={24}
        color={Constants.iconColor.black}
      />
    );
  };

  return (
    <Tab.Navigator screenOptions={({ route }) => screenOptions(route)}>
      <Tab.Screen name={Constants.screen.home} component={HomeScreen} />
      <Tab.Screen name={Constants.screen.stores} component={NoInternet} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default BottomNavigation;
