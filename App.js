import { StatusBar } from 'expo-status-bar';

// Import components
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';


/* 
App Component

Root component for a UI that React Native uses
*/
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Button title='TapME'/>
      <StatusBar style="auto" />
    </View>
  );
}

/* 
Stylesheet Object
*/
const styles = StyleSheet.create({
  container: {
    // Similar to CSS
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
