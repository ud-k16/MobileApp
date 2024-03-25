import { StyleSheet, Text, View } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import NoInternet from './src/screens/noInternetScreen';

const App = () => {
  const { type, isConnected } = useNetInfo();
  return <View style={styles.container}>{isConnected && <NoInternet />}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
