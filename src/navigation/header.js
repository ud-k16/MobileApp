import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { Constants } from '../constants/constants';

const Header = ({ route, navigation }) => {
  return (
    <Appbar.Header mode={Constants.headerMode}>
      <Appbar.Action
        icon={Constants.icon.menu}
        onPress={() => navigation.openDrawer()}
      />
      <Appbar.Content title={route.name} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({});

export default Header;
