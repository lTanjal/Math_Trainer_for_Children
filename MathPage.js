import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  FlatList,
  TextInput,
} from "react-native";
import { Icon, ListItem, Button } from "@rneui/themed";
import { useState, useEffect } from "react";
import { mathTasksList } from "./MathTasksList";
import generateTasks from "./TasksGenerator";
import EmptyList from "./EmptyMathTasksList";

export default function MathPage({ navigation }) {
  const [expanded, setExpanded] = useState(false);
  const [taskSelection, setTaskSelection] = useState({
    name: "Please select a task",
  });
  const [resultsForm, setResultsForm] = useState([]);

  const defineEmptyMathListStyle = () => (
    <EmptyList isEmpty={taskSelection.taskNumber == null} />
  );

  console.log("This is task selection", taskSelection.taskNumber);
  const handlePress = (item) => {
    setTaskSelection(item);
    setExpanded(false);
    setResultsForm([]);
    console.log(item);
  };

  const handleGenerate = () => {
    const newExamples = generateTasks(taskSelection); // Generate tasks based on selected task
    setResultsForm(newExamples); // Set resultsForm to the generated tasks
    console.log("Generated examples:", newExamples);
  };

  const hendleResultsForm = (text, index) => {
    setResultsForm((prevResultsForm) => {
      const newExamplesSet = [...prevResultsForm];
      newExamplesSet[index].userResult = text; // Update the userResult for the specific item

      const allFilled = newExamplesSet.every((item) => item.userResult !== "");

      // If all filled
      if (allFilled) {
        newExamplesSet.forEach((item) => {
          // Show or hide specific icon and correct result if the userResult is not or equal to sysResult
          if (item.userResult != item.sysResult) {
            item.iconSlashVisible = true;
            item.iconOkVisible = false;
            item.showSysResult = true;
            // Set the Slash icon and correct result visible and hide Ok icon
          } else {
            item.iconSlashVisible = false;
            item.iconOkVisible = true;
            item.showSysResult = false;
            // Hide Slash icon and set Ok icon visible
          }
        });

        // Set the updated state only if all are filled
        console.log("All inputs filled:", newExamplesSet);
      }
      return newExamplesSet;
    });
  };

  const renderItem = ({ item, index }) => (
    <View flexDirection="row">
      <Text style={styles.examples}>{item.firstNum}</Text>
      <Text style={styles.examples}>{item.mathSign}</Text>
      <Text style={styles.examples}>{item.secondNum}</Text>
      {item.thirdNum && <Text style={styles.examples}>{item.thirdNum}</Text>}
      {item.fourthNum && <Text style={styles.examples}>{item.fourthNum}</Text>}
      <Text style={styles.examples}>=</Text>

      <View style={{ position: "relative" }}>
        <TextInput
          style={styles.examples}
          placeholder="U result"
          value={item.userResult}
          onChangeText={(text) => hendleResultsForm(text, index)}
          keyboardType="numeric"
        />

        {item.iconSlashVisible && (
          <Icon
            name="slash"
            type="font-awesome-5"
            size={25}
            color="#d97915"
            containerStyle={{
              position: "absolute",
              left: 4,
              top: "50%",
              transform: [{ translateY: -11 }],
            }}
          />
        )}
        {item.showSysResult && (
          <Text
            style={{
              position: "absolute",
              left: 55,
              fontSize: 24,
              padding: 8,
              fontWeight: "800",
            }}
          >
            {item.sysResult}
          </Text>
        )}

        {item.iconOkVisible && (
          <Icon
            name="like"
            type="evilicon"
            size={45}
            color="#22903e"
            containerStyle={{
              position: "absolute",
              left: 55,
            }}
          />
        )}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ListItem.Accordion
        content={
          <>
            <Icon
              name="calculator"
              type="simple-line-icon"
              size={30}
              color="#d97915"
              style={{ marginRight: 10 }}
            />

            <ListItem.Content>
              <ListItem.Title
                style={{ color: "#0b67a2", fontWeight: "bold", fontSize: 20 }}
              >
                {taskSelection.name ? taskSelection.name : "Accordion Title"}
              </ListItem.Title>
            </ListItem.Content>
          </>
        }
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded);
        }}
      >
        <ScrollView contentContainerStyle={{ paddingBottom: 90 }}>
          {mathTasksList.map((item, i) => (
            <ListItem key={i} onPress={() => handlePress(item)} bottomDivider>
              <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          ))}
        </ScrollView>
      </ListItem.Accordion>

      <Button
        type="outline"
        buttonStyle={styles.buttonStyle}
        titleStyle={{ color: "#0b67a2" }}
        icon={{
          name: "start",
          type: "material",
          size: 30,
          color: "#d97915",
          containerStyle: { marginRight: 10 },
        }}
        raised
        containerStyle={{
          width: 100,
          height: 45,
          marginVertical: 10,
          marginLeft: 10,
        }}
        onPress={handleGenerate}
      >
        Start
      </Button>

      <FlatList
        data={resultsForm}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={styles.separators}></View>}
        renderItem={renderItem}
        removeClippedSubviews={false}
        ListEmptyComponent={defineEmptyMathListStyle}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf2ae",
  },
  separators: {
    height: 2,
    backgroundColor: "lightgrey",
  },
  examples: {
    fontSize: 24,
    padding: 8,
    fontWeight: "800",
  },
  imputsAmount: {
    alignSelf: "flex-end",
    borderColor: "lightblue",
    borderWidth: 2,
    padding: 10,
    width: "auto",
    fontSize: 20,
  },
  buttonStyle: {
    flexDirection: "row",
  },
});
