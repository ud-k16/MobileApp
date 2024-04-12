import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { StoreContext } from '../store/storeContext';
const EmeraldStores = () => {
  const state = useContext(StoreContext);
  console.log(state);
  return <View></View>;
};

const styles = StyleSheet.create({});

export default EmeraldStores;
