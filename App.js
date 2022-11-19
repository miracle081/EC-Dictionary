import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, StatusBar, Platform, SafeAreaView } from 'react-native';
import { AuthNaviator } from './Components/Navigator';
import { Upload } from './UpLoeadImage';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <NavigationContainer>
        <AuthNaviator />
      </NavigationContainer> */}
      <Upload/>
    
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
