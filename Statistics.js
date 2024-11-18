import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Icon, Dialog } from "@rneui/themed";
import { Rating } from "react-native-ratings";
import { useEffect, useState } from "react";
import { useSaveResults } from "./MathResultsToDB";
import { mathTasksList } from "./MathTasksList";
import { BarChart } from "react-native-gifted-charts";

export default function Statistics(navigation) {
  const {
    resultsStatistics,
    dbResults,
    detailedStatistics,
    dbDetailedResults,
  } = useSaveResults();
  const [statisticsForm, setStatisticsForm] = useState([]);
  const [visible, setVisible] = useState(false);
  const [chartFormData, setChartFormData] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const handlePress = (item) => {// data for chart
    setSelectedItem(item);

    if (dbDetailedResults && dbDetailedResults.length > 0) {
      const matchingDetailedStatistics = dbDetailedResults.find(
        (result) => result.mathTaskId === Number(item.taskNumber)// name of task from Statistics list
      );

      if (matchingDetailedStatistics) {
        const {
          all_correct,
          nine_correct,
          eight_correct,
          seven_correct,
          less_correct,
        } = matchingDetailedStatistics;

        const updatedItem = [
          { value: all_correct, frontColor: "#93dcaa", gradientColor : "#309120" },
          { value: nine_correct, frontColor:"#d0ecb5" ,gradientColor : "#8de833"},
          { value: eight_correct, frontColor:"#f3eeaa",gradientColor : "#fae90d" },
          { value: seven_correct, frontColor:"#f3d3ac",gradientColor : "#f3a03e" },
          { value: less_correct, frontColor:"#f8c5c5", gradientColor : "#f16e6e"},
        ];

        console.log("data for chart", updatedItem);
        setChartFormData(updatedItem);
        setVisible(true);
        return;
      }
    } else {
      Alert.alert("There is no result to show yet");
    }
  };

  const calculateStars = (percentage) => {
    const stars = (percentage || 0) / 20; // Map 0-100% to a 1-5 star rating
    return stars;
  };

  useEffect(() => {
    resultsStatistics();
    detailedStatistics();
  }, []);

  useEffect(() => {
    if (dbResults && dbResults.length > 0) {
      const updateStatisticsForm = mathTasksList.map((item) => {//if there are new data in DB, Statistics form updates its results.
        const matchingResult = dbResults.find(
          (result) => result.mathTaskId === Number(item.taskNumber)
        );

        if (matchingResult) {
          const { attempts, averagePercentage, totalCorrectAnswers } =
            matchingResult;

          return {
            ...item,
            attempts,
            averagePercentage,
            totalCorrectAnswers,
          };
        }
        return item;
      });
      setStatisticsForm(updateStatisticsForm);
    }
  }, [dbResults]);

  return (
    <View style={styles.conteiner}>
      <View style={styles.column}>
        <View style={styles.columnsTitleView1}>
          <Icon
            name="list"
            type="font-awesome"
            size={30}
            color="#d97915"
            containerStyle={{
              paddingHorizontal: 10,
            }}
          />
          <Text style={styles.columnTitleText1}>Math task name</Text>
        </View>
        <View style={styles.columnsTitleView2}>
          <Text style={styles.columnTitleText2}>Average{"\n"}grade</Text>
        </View>
      </View>

      <FlatList
        data={statisticsForm}
        renderItem={({ item }) => (
          <View flexDirection="row">
            <View style={styles.column1View}>
              <View style={styles.column1part1View}>
                <Text style={styles.column1Text}>
                  {"№"}
                  {item.taskNumber}
                </Text>
              </View>
              <View style={styles.column1part2View}>
                {item.averagePercentage ? (
                  <TouchableOpacity onPress={() => handlePress(item)}>
                    <Text style={[styles.column1Text,{textDecorationLine: "underline"}]}
                    >{item.name}
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <Text style={styles.column1Text}>{item.name}</Text>
                )}
              </View>
            </View>
            <View style={styles.columnsTitleView2}>
              {item.averagePercentage ? (
                <Rating
                  type="star"
                  tintColor="#fefff4"
                  ratingCount={5}
                  imageSize={17}
                  readonly
                  startingValue={calculateStars(item.averagePercentage)}
                  style={styles.rating}
                />
              ) : (
                <Text style={styles.noAttempts}>No attempts</Text>
              )}
            </View>
          </View>
        )}
      />

      <Dialog
        isVisible={visible}
        onBackdropPress={() => {
          setVisible(false);
          setSelectedItem();
          setChartFormData();
        }}
        overlayStyle={{
          alignItems: "center",
          padding: 10,
          height: "73%",
          width: "90%",
        }}
      >
        <Dialog.Actions>
          {selectedItem && (
            <Text style={styles.columnTitleText1}>{selectedItem.name}</Text>
          )}
        </Dialog.Actions>

        <View style={styles.dialogTextView}>
          <Text style={styles.dialogText}>Total attempts: </Text>
          {selectedItem && (
            <Text style={styles.dialogNumbers}>{selectedItem.attempts}</Text>
          )}
        </View>
        <View style={styles.dialogTextView}>
          <Text style={styles.dialogText}>Total correct answers: </Text>
          {selectedItem && (
            <Text style={styles.dialogNumbers}>
              {selectedItem.totalCorrectAnswers}
            </Text>
          )}
        </View>
       
        <View style={styles.chartContainer}>
        <View style={styles.dialogTextView}>
          <Text style={{position: 'absolute',left:10,bottom:-2, fontSize:17, color: "#8e9fc5"}}>%</Text>
        </View>
          <BarChart
            data={chartFormData}
            width={250}
            maxValue={100}
            barWidth={39}
            barBorderRadius={5}
            showGradient
            stepValue={10}
            stepHeight={30}
            spacing={10}
            initialSpacing={15}
            backgroundColor="#e7eeff"
            showYAxisIndices
            isAnimated
            yAxisLabelWidth={35}
            yAxisTextStyle={{ fontSize: 11, color: "#333",fontWeight: "bold", }}
            yAxisThickness={2}
            labelWidth={50}
            xAxisLabelTexts={["All correct","9","8","7", "< 6"]}
            labelsDistanceFromXaxis={3}
            xAxisLabelTextStyle={{
                color: "#333",
                fontSize: 11, 
                fontWeight: "bold",
             }}
            xAxisThickness={2}
        />
        <View style={styles.dialogTextView}>
          <Text style={{position: 'absolute',left:60,top:5, fontSize:15, color: "#8e9fc5"}}>Correct answers per attempt</Text>
        </View>
        </View>
      </Dialog>
    </View>
  );
}
const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "#ecf2ae",
  },
  columnTitleText1: {
    color: "#0b67a2",
    fontWeight: "bold",
    fontSize: 17,
  },
  columnTitleText2: {
    color: "#0b67a2",
    fontWeight: "bold",
    fontSize: 17,
    textAlign: "center",
  },
  column: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#a9b599",
  },
  columnsTitleView1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "73%",
    backgroundColor: "#ecf2ae",
    borderRightWidth: 1,
    borderColor: "#a9b599",
  },
  columnsTitleView2: {
    alignItems: "center",
    width: "27%",
    backgroundColor: "#f9fff2",
    paddingVertical: 5,
  },
  column1View: {
    flexDirection: "row",
    width: "73%",
    backgroundColor: "#ecf2ae",
    borderRightWidth: 1,
    borderColor: "#a9b599",
    paddingVertical: 10,
  },
  column1part1View: {
    paddingHorizontal: 10,
  },
  column1part2View: {
    width: "81%",
  },
  column1Text: {
    fontWeight: "bold",
    color: "#424141",
  },
  noAttempts: {
    color: "#cbd6dc",
    fontStyle: "italic",
    paddingVertical: 5,
  },
  rating: {
    paddingVertical: 10,
    color: "#d97915",
  },
  dialogContainer: {
    alignItems: "center",
    width: "90%",
  },
  dialogText: {
    fontWeight: "500",
  },
  dialogNumbers: {
    fontWeight: "500",
    color: "#d97915",
  },
  dialogTextView: {
    flexDirection: "row",
    paddingTop: 10,
    width: "80%",
  },

  chartContainer: {
    flex: 1,
    width: "100%", // Full-Width
    justifyContent: "flex-end",
    paddingVertical:10
  },
});
