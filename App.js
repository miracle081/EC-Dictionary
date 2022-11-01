import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, StatusBar, Platform, SafeAreaView } from 'react-native';
import { AuthNaviator } from './Components/Navigator';
import { Result } from './Screens/Result';
import { HomeScreen } from './Screens/HomeScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer style={styles.container2}>
        <AuthNaviator />
      </NavigationContainer>
      {/* <HomeScreen /> */}
      
    </SafeAreaView>
  );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#372948',
    paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : null
  },
});
