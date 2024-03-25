import { Button, StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Constants } from '../constants/constants';
const NoInternet = () => {
  return (
    <View style={styles.container}>
      <View style={styles.descriptionBlock}>
        <MaterialIcons name="report-gmailerrorred" size={44} color="red" />
        <Text style={styles.textStyle}>{Constants.noInternet}</Text>
      </View>
      <Button title={'continue Offline'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  descriptionBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 70,
  },
  textStyle: {
    fontSize: 26,
  },
});

export default NoInternet;
