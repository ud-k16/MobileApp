import { useContext } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { StoreContext } from '../store/storeContext';
import FlatListItemSeparator from '../components/flatListSeparator';
import ArticleCard from '../components/articleCard';

const HomeScreen = () => {
  //getting article data from context
  const state = useContext(StoreContext);
//render function for each article
  const renderData = ({ item }) => <ArticleCard articleData={item} />;

  return (
    <FlatList
      data={state.emeraldData}
      key={(item, key) => key}
      renderItem={renderData}
      ItemSeparatorComponent={FlatListItemSeparator}
    />
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
