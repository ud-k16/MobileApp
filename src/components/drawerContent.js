import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LogoCard from './logoCard';
import { List } from 'react-native-paper';
import { Constants } from '../constants/constants';

const DrawerContent = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.containerStyle}>
      <View>
        <LogoCard style={styles.logoCardStyle} />
        <View style={styles.listContainer}>
          <List.Item
            title={Constants.screen.home}
            left={(props) => (
              <List.Icon {...props} icon={Constants.icon.home} />
            )}
            style={styles.listStyle}
            onPress={() => navigation.navigate(Constants.screen.home)}
          />
          <List.Item
            title={Constants.screen.stores}
            left={(props) => (
              <List.Icon {...props} icon={Constants.icon.stores} />
            )}
            style={styles.listStyle}
            onPress={() => navigation.navigate(Constants.screen.stores)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: Constants.backgroundColor.white,
    flexGrow: 1,
    paddingHorizontal: 2,
  },
  logoCardStyle: {
    alignSelf: 'center',
  },
  listContainer: {
    marginTop: 60,
  },
  listStyle: {
    borderColor: Constants.backgroundColor.emeraldGreen,
    borderStyle: 'solid',
    borderWidth: 1,
    marginBottom: 10,
  },
});

export default DrawerContent;
