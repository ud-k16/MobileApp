import { StyleSheet, View } from 'react-native';
import { Avatar, Text } from 'react-native-paper';
import { Constants } from '../constants/constants';

const LogoCard = ({ style }) => {
  const userData = {
    name: 'EM',
    image: require('../../assets/emerald.webp'),
  };
  const name = userData.name;
  const image = userData.image;
  return (
    <View style={style}>
      {image ? (
        <Avatar.Image
          source={image}
          style={[styles.avatarStyle, styles.avatarImage]}
          size={100}
        />
      ) : (
        <Avatar.Text label={name} style={styles.avatarStyle} />
      )}

      <Text
        variant={Constants.textVariant.headlineLarge}
        children={Constants.screen.home}
      ></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarStyle: {
    alignSelf: 'center',
  },
  avatarImage: {
    resizeMode: 'cover',
    backgroundColor: Constants.backgroundColor.white,
  },
});

export default LogoCard;
