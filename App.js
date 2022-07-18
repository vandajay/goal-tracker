import { StatusBar } from 'expo-status-bar';

// Import components
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button
} from 'react-native';


/* 
App Component

Root component for a UI that React Native uses
*/
export default function App() {
  return (
    <View style={styles.appContainer}>

      {/* Goal Input */}
      <View>
        <TextInput placeholder='Enter goal...' />
        <Button title='Add Goal' />
      </View>

      {/* Goal List */}
      <View>
        <Text>Goal List</Text>
      </View>
    </View>
  );
}

/* 
Stylesheet Object
*/
const styles = StyleSheet.create({
  appContainer: {
    padding: 50
  }

});
