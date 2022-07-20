import { StatusBar } from "expo-status-bar";

// Import components
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

/*
App Component

Root component for a UI that React Native uses
*/
export default function App() {
// functions
  function goalInputHandler(enteredText) {
    console.log(enteredText);
   };
  
  function addGoalHandler() { };
  


  return (
    <View style={styles.appContainer}>

      {/* Goal Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Enter goal...'
          // function without '()' only points to the function
          onChangeText={goalInputHandler}
        />
        <Button
          title='Add Goal'
          onPress={addGoalHandler}
        />
      </View>

      {/* Goal List... */}
      <View style={styles.goalsContainer}>
        <Text>List of Goals...</Text>
      </View>
    </View>
  );
}

/*
Stylesheet Object
*/
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8
  },
  goalsContainer: {
    flex: 5
  }

});

// /* 
// Flexbox Practice
// */
// export default function App() {
//   return (
//     <View style={{
//       padding: 50,
//       flexDirection: 'row',
//       width: '80%',
//       height: 300,
//       justifyContent: 'space-around',
//       alignItems: 'stretch'
//     }}>
//       <View
//         style={{
//           backgroundColor: "red",
//           flex: 1,
//           // width: 100,
//           // height: 100,
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Text>1</Text>
//       </View>
//       <View
//         style={{
//           backgroundColor: "blue",
//           flex: 1,
//           // width: 100,
//           // height: 100,
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Text>2</Text>
//       </View>
//       <View
//         style={{
//           backgroundColor: "green",
//           flex: 2,
//           // width: 100,
//           // height: 100,
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Text>3</Text>
//       </View>
//     </View>
//   );
// }

// /* 
// Stylesheet Object
// */
// const styles = StyleSheet.create({
//   appContainer: {
//     padding: 50,
//   },
//   inputContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   textInput: {
//     borderWidth: 1,
//     borderColor: "#cccccc",
//     width: "80%",
//     marginRight: 8,
//   },
// });


