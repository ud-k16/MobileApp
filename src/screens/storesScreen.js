import { useContext } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { StoreContext } from '../store/storeContext';
import StoreCard from '../components/storeCard';
import FlatListItemSeparator from '../components/flatListSeparator';
const EmeraldStores = () => {
  const state = useContext(StoreContext);

  const renderData = ({ item }) => <StoreCard storeData={item} />;
  return (
    <FlatList
      data={state.emeraldStore}
      key={(item, key) => key}
      renderItem={renderData}
      ItemSeparatorComponent={FlatListItemSeparator}
    />
  );
};

const styles = StyleSheet.create({});

export default EmeraldStores;
