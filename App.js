import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from './src/navigation/bottomNavigation';
import DrawerNavigation from './src/navigation/drawerNavigation';
import { Store } from './src/store/storeContext';
import { useNetInfo } from '@react-native-community/netinfo';
import NoInternet from './src/screens/noInternetScreen';
import { useEffect, useState } from 'react';

const App = () => {
  const [offline, setOffline] = useState(false);
  //getting network connection status
  const { isConnected } = useNetInfo();
  //checking whether to render main component
  const rendermain = isConnected || offline;
  //on internet connection and offline flag is set original components are displayed
  return rendermain ? (
    <>
      <Store>
        <NavigationContainer>
          <DrawerNavigation>
            <BottomNavigation />
          </DrawerNavigation>
        </NavigationContainer>
      </Store>
    </>
  ) : (
    <NoInternet offline={offline} setOffline={setOffline} />
  );
};

const styles = StyleSheet.create({});

export default App;
