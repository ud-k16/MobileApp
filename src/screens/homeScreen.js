import { StyleSheet, View } from 'react-native';
import NoInternet from './noInternetScreen';
import { useNetInfo } from '@react-native-community/netinfo';

const HomeScreen = () => {
  const { isConnected } = useNetInfo();
  return <View style={styles.container}>{!isConnected && <NoInternet />}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
