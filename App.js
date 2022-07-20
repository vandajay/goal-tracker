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
Flexbox Practice
*/
export default function App() {
  return (
    <View>
      <View style={styles.appContainer}>
        <Text>1</Text>
      </View>
      <View style={styles.appContainer}>
        <Text>2</Text>
      </View>
      <View style={styles.appContainer}>
        <Text>3</Text>
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
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 8
  }

});

// /* 
// App Component

// Root component for a UI that React Native uses
// */
// export default function App() {
//   return (
//     <View style={styles.appContainer}>

//       {/* Goal Input */}
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.textInput}
//           placeholder='Enter goal...'
//         />
//         <Button title='Add Goal (+)' />
//       </View>

//       {/* Goal List */}
//       <View>
//         <Text>Goal List</Text>
//       </View>
//     </View>
//   );
// }

// /* 
// Stylesheet Object
// */
// const styles = StyleSheet.create({
//   appContainer: {
//     padding: 50
//   },
//   inputContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between"
//   },
//   textInput: {
//     borderWidth: 1,
//     borderColor: '#cccccc',
//     width: '80%',
//     marginRight: 8
//   }

// });
