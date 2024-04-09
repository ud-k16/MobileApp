import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

const Header = ({ route, navigation }) => {
  return (
    <Appbar.Header mode="center-aligned">
      <Appbar.Action
        icon={'reorder-horizontal'}
        onPress={() => navigation.openDrawer()}
      />
      <Appbar.Content title={route.name} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({});

export default Header;
