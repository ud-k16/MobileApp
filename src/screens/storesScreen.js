import { useContext } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { StoreContext } from '../store/storeContext';
import StoreCard from '../components/storeCard';
import FlatListItemSeparator from '../components/flatListSeparator';

/** screen for the emerald store tab */
const EmeraldStores = () => {
  //getting store data from context
  const state = useContext(StoreContext);
  //render function for each store data
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
