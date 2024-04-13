import { Linking, StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { Constants } from '../constants/constants';

const ArticleCard = ({ articleData }) => {
  const image = articleData.imageUrl
    ? {
        uri: `${articleData.imageUrl}`,
      }
    : require('../../assets/default.jpg');

  return (
    <Card mode="outlined" style={styles.borderStyle}>
      <Card.Cover
        source={image}
        resizeMode={Constants.imageResizeMode.cover}
        style={styles.borderStyle}
      />
      <Card.Content>
        <Text variant={Constants.textVariant.headlineLarge}>
          {articleData.name}
        </Text>
        <Text variant={Constants.textVariant.bodyMedium}>
          {articleData.placeOfOrigin}
        </Text>
        <Text variant={Constants.textVariant.titleSmall}>
          {articleData.description}
        </Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  borderStyle: {
    borderRadius: 0,
  },
});

export default ArticleCard;
