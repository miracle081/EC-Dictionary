import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import { AuthNaviator } from './Components/Navigator';
import { Result } from './Screens/Result';
import { HomeScreen } from './Screens/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <AuthNaviator />
      </NavigationContainer>
      {/* <HomeScreen /> */}
    </View>
  );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : null
  },
});
