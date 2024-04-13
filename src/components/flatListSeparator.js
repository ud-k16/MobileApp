import React from 'react';
import { View, StyleSheet } from 'react-native';

const FlatListItemSeparator = () => {
  return <View style={styles.separatorStyle} />;
};

const styles = StyleSheet.create({
  separatorStyle: {
    marginBottom: 15,
  },
});

export default FlatListItemSeparator;
