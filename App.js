import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from './src/navigation/bottomNavigation';
import DrawerNavigation from './src/navigation/drawerNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigation>
        <BottomNavigation />
      </DrawerNavigation>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
