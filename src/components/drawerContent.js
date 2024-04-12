import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LogoCard from './logoCard';

const DrawerContent = () => {
  return (
    <SafeAreaView>
      <View>
        <LogoCard style={styles.userCardStyle} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  userCardStyle: {
    alignSelf: 'center',
  },
});

export default DrawerContent;
