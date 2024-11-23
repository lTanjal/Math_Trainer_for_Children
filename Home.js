
import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { Button, Icon } from '@rneui/themed';



export default function Home({navigation }) {
  return (
    <View style={{flex:1,
      backgroundColor: "#ffffff",
    }}>
    <ScrollView>

      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginTop:15,
        }}
      >
        <Text style={styles.customText1}>Math trainer & translator</Text>
      </View>
     
      <View
        style={{
          flex: 5,
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop:15
        }}
      >
        <View>
          <Image
            style={styles.imageStyle}
            source={require("./assets/images/mathpage.png")}
          ></Image>
          <Text style={styles.system}>Math Problems Page</Text>
          <Text style={styles.blockText}>
            {" "}
            On this page, you’ll find a variety of math problems covering
            addition, subtraction, multiplication, division, and order of
            operations at different difficulty levels. Test yourself, practice
            regularly, and celebrate your successes along the way. Good luck!
          </Text>
          <Button
              type="outline"
              buttonStyle={styles.buttonStyle}
              titleStyle={{ color: "#0b67a2" }}
              raised
              containerStyle={{
                width: 170,
                marginVertical: 10,
              }}
              onPress={() => navigation.navigate('Math problems')} 
              >
            <Icon name="rocket" type='octicon' size={30} color="#d97915"  style={{ marginRight: 10 }} />
            Let's start
           
            </Button>
            <View>
      
    </View>
        </View>
        <View>
          <Image
            style={styles.imageStyle}
            source={require("./assets/images/statistics.png")}
          ></Image>

          <Text style={styles.system}>My success</Text>
          <Text style={styles.blockText}>
            {"    "}
            Here you can view your results and identify areas where you excel
            and where you may need a bit more practice.
          </Text>
          <Button
              type="outline"
              buttonStyle={styles.buttonStyle}
              titleStyle={{ color: "#0b67a2" }}
              raised
              containerStyle={{
                width: 170,
                marginVertical: 10,
              }}
              onPress={() => navigation.navigate('My results')}>
            <Icon name="line-chart" type='font-awesome' size={30} color="#d97915"  style={{ marginRight: 10 }} />
            My results
            </Button>
        </View>
      </View>

      <View
        style={{
          flex: 5,
          marginHorizontal:11
        }}
      >
        <Image
          style={styles.imageStyle}
          source={require("./assets/images/translator.png")}
        ></Image>
        <Text style={styles.system}>Translate my words in other language</Text>
        <Text style={styles.blockText}>
          {" "}
          Here, you can translate unfamiliar words or entire sentences between
          different languages. Type your text and the translation will appear in the nearby
          window. Happy discovering!
        </Text>
        <Button
              type="outline"
              buttonStyle={styles.buttonStyle}
              titleStyle={{ color: "#0b67a2" }}
              raised
              containerStyle={{
                width: 170,
                marginVertical: 10,
              }}
              onPress={() => navigation.navigate('Translator')} 
              >
            <Icon name="language" type='font-awesome' size={30} color="#d97915"  style={{ marginRight: 10 }} />
            Translator
            </Button>
      </View>
      </ScrollView>
     </View>
  );
}
const styles = EStyleSheet.create({
  
  customText1: {
    fontFamily: "$customPlayfairRegularFont",
    // Using a custom font
    fontSize: 24,
    color: "#ff877d",
  },
  system: {
    fontSize: 17,
    color: "#0b67a2",
    resizeMode: "contain",
    width: 170,
  },
  blockText: {
    fontSize: 12,
    color: "#0b67a2",
    width: 170,
    textAlign: "justify",
  },
  imageStyle: {
    width: 170,
    height: 145,
    resizeMode: "contain",
  },
  buttonStyle:{
    borderColor: "#0b67a2",
    borderWidth: 1,
    flexDirection: 'row',           // Aligns icon and text in a row
    alignItems: 'center',           // Vertically centers items in the row
    justifyContent: 'flex-start'
  },
});
