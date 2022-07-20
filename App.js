import { useState } from "react";
import { StatusBar } from "expo-status-bar";

// Import components
import { StyleSheet, View, FlatList, Button } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

/*
App Component

Root component for a UI that React Native uses
*/
export default function App() {
  // create states
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  // functions

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    console.log(enteredGoalText);

    // append new goal current list of goals
    setCourseGoals((currentCourseGoals) => [
      ...courseGoals,
      // create every item as an object for FlatList
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    console.log("DELETE");
    setCourseGoals((currentCourseGoals) => {
      // filter returns a new array minus deletion
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />

      {/* Goal Input */}
      <GoalInput
        visible={modalIsVisible}
        onAddGoal={addGoalHandler}
        onCancel={endAddGoalHandler}
      />

      {/* Goal List */}
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
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
  goalsContainer: {
    flex: 5,
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
