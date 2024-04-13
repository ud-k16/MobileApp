import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { StoreContext } from '../store/storeContext';
import StoreCard from '../components/storeCard';
const EmeraldStores = () => {
  const state = useContext(StoreContext);

  return <StoreCard storeData={state.emeraldStore[0]} />;
};

const styles = StyleSheet.create({});

export default EmeraldStores;
