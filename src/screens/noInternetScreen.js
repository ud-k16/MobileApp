import { Button, StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Constants } from '../constants/constants';
/**
 * screen  that is displayed  on no interenet connection
 */
const NoInternet = ({ offline, setOffline }) => {
  return (
    <View style={styles.container}>
      <View style={styles.descriptionBlock}>
        <MaterialIcons
          name={Constants.icon.error}
          size={44}
          color={Constants.iconColor.red}
        />
        <Text style={styles.textStyle}>{Constants.noInternet}</Text>
      </View>
      <Button
        title={Constants.offlinePreferenceComment}
        //on user preferring offline mode , offline flag is set
        onPress={() => {
          setOffline(!offline);
        }}
      />
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
