import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Intro } from './Screens/Intro';
import { AuthNaviator } from './Components/Navigator';
// import { HomeScreen } from './Screens/HomeScreen';
import { HomeScreen } from './HomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        {/* <AuthNaviator /> */}
      </NavigationContainer>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
