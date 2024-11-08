import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  FlatList,
  TextInput,
  Alert,
  ActivityIndicator,
} from "react-native";
import { Icon, ListItem, Button, Overlay, Image } from "@rneui/themed";
import { useState, useEffect } from "react";
import { mathTasksList } from "./MathTasksList";
import generateTasks from "./TasksGenerator";
import EmptyList from "./EmptyMathTasksList";
import FetchCongratulations from "./FetchCongratulationsApi";
import resultsChecker from "./ResultsChecker";
import {useSaveResults} from "./MathResultsToDB";


export default function MathPage({ navigation }) {
  const [expanded, setExpanded] = useState(false);
  const [taskSelection, setTaskSelection] = useState({
    name: "Please select a task",
  });
  const [resultsForm, setResultsForm] = useState([]);
  const [correctAnswers, setCorrectAnswers]= useState()
  const [visibleAnimation, setVisibleAnimation] = useState(false);
  const [animationUrl, setAnimationUrl] = useState(null);
  const [isVisibleButton, setIsVisibleButton] = useState(false);
  const { saveMathResultsToDB } = useSaveResults();
 
  const toggleOverlay = () => {
    setVisibleAnimation(!visibleAnimation);
    setResultsForm([]);

  };

  
  const defineEmptyMathListStyle = () => (
    <EmptyList isEmpty={taskSelection.taskNumber == null} />
  );

  console.log("This is task selection", taskSelection.taskNumber);

  const handlePress = (item) => {
    setTaskSelection(item);
    setExpanded(false);
    setResultsForm([]);
    setIsVisibleButton(false);
    console.log(item);
  };

  const handleGenerate = () => {
    const newExamples = generateTasks(taskSelection); // Generate tasks based on selected task
    setResultsForm(newExamples); // Set resultsForm to the generated tasks
    setIsVisibleButton(false); // Hide a "check answers" button
    console.log("Generated examples:", newExamples);
  };

  const handleCheckResult=()=>{
    const allFilled = resultsForm.every((item) => item.userResult !== "");
      if (allFilled) {
    const {updatedResultsForm, checkedAnswers} = resultsChecker(resultsForm)
    setResultsForm(updatedResultsForm);// Set resultsForm to the checked results
    saveMathResultsToDB(checkedAnswers, taskSelection); 
    setIsVisibleButton(false);
    

  if(checkedAnswers===10){
    setTimeout(() => {
    FetchCongratulations()
    .then ((data)=>{
      if(data.results.length===0){
        Alert.alert("Congratulations!!!");
      } else{
        
       let setAnimation= data.results[0].media_formats.gif.url;
       setAnimationUrl(setAnimation);  
       toggleOverlay();

       console.log(setAnimation)
      }
    })
    .catch((err)=>console.error(err) 
    );
     
  },1500)

  }
}else{
  Alert.alert("Please fill all answers");
}
};

  const hendleResultsForm = (text, index) => {
    setResultsForm((prevResultsForm) => {
      const newExamplesSet = [...prevResultsForm];
      newExamplesSet[index].userResult = text; // Update the userResult for the specific item

      const allFilled = newExamplesSet.every((item) => item.userResult !== "");
      // If all filled
      if (allFilled) {
        setIsVisibleButton(true); 
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

      <View style={{ position: "relative" , width: '100%'}}>
      {item.isChecked ? (
        <Text style={styles.examples}>{item.userResult}</Text> // Display userResult as Text
      ) : (
        <TextInput
          style={styles.examples}
          placeholder="___"
          value={item.userResult}
          onChangeText={(text) => hendleResultsForm(text, index)}
          keyboardType="numeric"
        />
      )}
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
              left: 50,
              top: "8%",
              fontSize: 23,
              color:"#d97915",
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
              left: 45,
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
     
      <View style={styles.buttonContainer}>
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
        
        }}
        onPress={handleGenerate}
      >
        Start
      </Button>
      {isVisibleButton && (
      <Button
        type="outline"
        ali ="right"
        buttonStyle={styles.buttonStyle}
        titleStyle={{ color: "#0b67a2" }}
        icon={{
          name: "checklist",
          type: "material",
          size: 30,
          color: "#d97915",
          containerStyle: { marginRight: 10 },
        }}
        raised
        containerStyle={{
          width: 175,
          height: 45,
          marginVertical: 10,
          marginLeft: 10,
        }}
       onPress={handleCheckResult}
      >
        Check answers
      </Button>
      )}
      </View>
      <FlatList
        data={resultsForm}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={styles.separators}></View>}
        renderItem={renderItem}
        removeClippedSubviews={false}
        ListEmptyComponent={defineEmptyMathListStyle}
      />
      
       <Overlay isVisible={visibleAnimation} onBackdropPress={toggleOverlay}>
       
       <Image
       source={{ uri: animationUrl }}
       containerStyle={styles.image}>
        </Image> 
      </Overlay>
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
    fontSize: 23,
    padding: 5,
    fontWeight: "800",
  },

  buttonStyle: {
    flexDirection: "row",
  },
  image: {
    width: 300,
    height:300,
   },
   buttonContainer:{
    flexDirection:"row",
    justifyContent:'space-between',
    width:'100%',
    paddingHorizontal:16
   }
});
