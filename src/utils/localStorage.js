import AsyncStorage from '@react-native-async-storage/async-storage';

//function to store network availability in local storage
export const storeNetworkStatus = async (value) => {
  try {
    await AsyncStorage.setItem('offline', value);
  } catch (e) {}
};
//function to retrive network status from local storage
export const getNetworkStatus = async () => {
  try {
    const value = await AsyncStorage.getItem('offline');
    if (value !== null) {
      return value;
    }
  } catch (e) {}
};
