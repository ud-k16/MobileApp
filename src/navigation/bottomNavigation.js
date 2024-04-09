import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NoInternet from '../screens/noInternetScreen';
import { Entypo } from '@expo/vector-icons';
import HomeScreen from '../screens/homeScreen';
import Header from './header';
import { Appbar } from 'react-native-paper';
const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        header: (props) => <Header {...props} />,
        tabBarIcon: () => {
          return route.name === 'Cotton Home' ? (
            <Entypo name="home" size={24} color="black" />
          ) : (
            <Entypo name="emoji-sad" size={24} color="black" />
          );
        },
      })}
    >
      <Tab.Screen name="Cotton Home" component={HomeScreen} />
      <Tab.Screen name="sample " component={NoInternet} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default BottomNavigation;
