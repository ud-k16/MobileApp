import { StyleSheet, View } from 'react-native';
import { Avatar, Text } from 'react-native-paper';

const LogoCard = ({ style }) => {
  const userData = {
    name: 'C',
    image: null,
  };
  const name = userData.name;
  const image = userData.image;
  return (
    <View style={style}>
      {image ? (
        <Avatar.Image source={image} style={styles.avatarStyle} />
      ) : (
        <Avatar.Text label={name} style={styles.avatarStyle} />
      )}

      <Text variant="headlineLarge" children={'Cotton Home'}></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarStyle: {
    alignSelf: 'center',
  },
});

export default LogoCard;
