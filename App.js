import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AuthNaviator } from './Components/Navigator';
import { Result } from './Screens/Result';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        {/* <AuthNaviator /> */}
      </NavigationContainer>
      {/* <Result /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
