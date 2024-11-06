import { StatusBar } from "expo-status-bar";

import {View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { useFonts } from "expo-font";
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./Home";
import MathPage from "./MathPage";
import Translator from "./Translator";
import Statistics from "./Statistics";
import TasksGenerator from "./TasksGenerator";

const Stack = createNativeStackNavigator();
export default function App() {
  const [fontsLoaded] = useFonts({
    "Playfair-Regular": require("./assets/fonts/PlayfairDisplay-Regular.otf"),
  });
  if (!fontsLoaded) {
    return null; // Optionally, return a loading screen or spinner here
  }
  EStyleSheet.build({
    $customPlayfairRegularFont: "Playfair-Regular", // Custom font from assets
    $systemFont: "Arial", // System font
  });

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Math problems" component={MathPage}/>
      <Stack.Screen name="Translator" component={Translator}/>
      <Stack.Screen name="My results"component={Statistics}/>
      

    </Stack.Navigator>
    <StatusBar style="auto" />
    
    </NavigationContainer>
  );
};
