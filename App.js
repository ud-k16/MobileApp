import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from './src/navigation/bottomNavigation';
import DrawerNavigation from './src/navigation/drawerNavigation';
import { Store } from './src/store/storeContext';

const App = () => {
  return (
    <Store>
      <NavigationContainer>
        <DrawerNavigation>
          <BottomNavigation />
        </DrawerNavigation>
      </NavigationContainer>
    </Store>
  );
};

const styles = StyleSheet.create({});

export default App;
