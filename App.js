import { startTransition, useState } from "react";
import { StatusBar } from "expo-status-bar";

// Import components
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
} from "react-native";

/*
App Component

Root component for a UI that React Native uses
*/
export default function App() {
  // create state
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  // functions
  function goalInputHandler(enteredText) {
    // console.log(enteredText);
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    console.log(enteredGoalText);

    // append new goal current list of goals
    setCourseGoals((currentCourseGoals) => [...courseGoals, enteredGoalText]);
  }

  return (
    <View style={styles.appContainer}>
      {/* Goal Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter goal..."
          // function without '()' only points to the function
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>

      {/* Goal List... */}
      <View style={styles.goalsContainer}>
        <ScrollView alwaysBounceVertical={false}>
          {/* 
        Always add the key prop in order to add duplicates to map

        iOS must make use of the View wrapper as it has more styling options
        */}
          {courseGoals.map((goal) => (
            <View key={goal} style={styles.goalItem}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

/*
Stylesheet Object

Styles do not cascade inn React Native like in CSS
*/
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
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
