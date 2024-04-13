import { Linking, StyleSheet, View } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import { Constants } from '../constants/constants';

const StoreCard = ({ storeData }) => {
  const image = storeData.imageUrl
    ? {
        uri: `${storeData.imageUrl}`,
      }
    : require('../../assets/default.jpg');

  return (
    <Card
      mode="outlined"
      onPress={() => Linking.openURL(storeData.websiteLink)}
    >
      <Card.Cover source={image} resizeMode={Constants.imageResizeMode.cover} />
      <Card.Content>
        <Text variant={Constants.textVariant.headlineLarge}>
          {storeData.name}
        </Text>
        <Text variant={Constants.textVariant.bodyMedium}>
          {storeData.place}
        </Text>
        <Text variant={Constants.textVariant.titleSmall}>
          {storeData.description}
        </Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({});

export default StoreCard;