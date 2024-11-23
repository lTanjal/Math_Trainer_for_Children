import { Icon, ListItem, Text, Button } from "@rneui/themed";
import { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, TextInput, Alert } from "react-native";
import FetchTranslate from "./FetchTranslate";

export default function Translator(navigation) {
  const [sourceExpanded, setSourceExpanded] = useState(false);
  const [targetExpanded, setTargetExpanded] = useState(false);
  const [fetchedLanguagesList, setFetchedLanguagesList] = useState([]);
  const [translated, setTranslated] = useState("");
  const [textToTranslate, setTextToTranslate] = useState();
  const [source, setSource] = useState({
    name: "Language",
  });
  const [target, setTarget] = useState({
    name: "Language",
  });

  useEffect(() => {
    fetch("https://libretranslate.com/languages")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error in fetch languages: " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setFetchedLanguagesList(data);
      })
      .catch((error) => {
        console.error("languages setting error: ", error);
      });
  }, []);

  const handleFromLanguageSelection = (item) => {
    setSource(item);
    setSourceExpanded(false);
  };
  const handleToLanguageSelection = (item) => {
    setTarget(item);
    setTargetExpanded(false);
  };

  const handleTranslate = () => {
    if (
      Array.isArray(source.targets) &&
      Array.isArray(target.targets) &&
      textToTranslate
    ) {
      let text = textToTranslate;
      let sourceLang = source.code;
      let targetLang = target.code;
      FetchTranslate(text, sourceLang, targetLang)
        .then((data) => {
          let fetchTranslation = data.responseData.translatedText;
          setTranslated(fetchTranslation);
        })
        .catch((error) => {
          console.error("Error in fetch translation:", error);
        });
    } else {
      Alert.alert("Please select both languages and write the text");
    }
  };

  const clearForms = () => {
    setTextToTranslate("");
    setTranslated("");
  };


  return (
    <View style={styles.conteiner}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <View style={{ width: "47%" }}>
          <ListItem.Accordion
            content={
              <>
                <View style={{ height: 60 }}>
                  <View style={{ flexDirection: "row" }}>
                    <Icon
                      name="g-translate"
                      type="materialIcons"
                      size={30}
                      color="#d97915"
                      style={{ marginRight: 10 }}
                    />
                    <Text
                      style={{
                        fontSize: 20,
                        marginStart: 5,
                        color: "#d97915",
                        fontWeight: 500,
                      }}
                    >
                      from{" "}
                    </Text>
                  </View>
                  <ListItem.Content>
                    <ListItem.Title
                      style={{
                        color: "#0b67a2",
                        fontWeight: "bold",
                        fontSize: 20,
                      }}
                    >
                      {" "}
                      {source.name}
                    </ListItem.Title>
                  </ListItem.Content>
                </View>
              </>
            }
            isExpanded={sourceExpanded}
            onPress={() => {
              setSourceExpanded(!sourceExpanded);
            }}
          >
            <ScrollView contentContainerStyle={{ paddingBottom: 90 }}>
              {fetchedLanguagesList.map((item, i) => (
                <ListItem
                  key={i}
                  onPress={() => handleFromLanguageSelection(item)}
                  bottomDivider
                >
                  <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                  </ListItem.Content>
                  <ListItem.Chevron />
                </ListItem>
              ))}
            </ScrollView>
          </ListItem.Accordion>
        </View>

        <View style={{ width: "47%" }}>
          <ListItem.Accordion
            content={
              <>
                <View style={{ height: 60 }}>
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={{
                        marginRight: 10,
                        fontSize: 20,
                        color: "#d97915",
                        fontWeight: 500,
                      }}
                    >
                      {" "}
                      to{" "}
                    </Text>
                    <Icon
                      name="g-translate"
                      type="materialIcons"
                      size={30}
                      color="#d97915"
                      style={{ marginRight: 10 }}
                    />
                  </View>
                  <ListItem.Content>
                    <ListItem.Title
                      style={{
                        color: "#0b67a2",
                        fontWeight: "bold",
                        fontSize: 20,
                      }}
                    >
                      {" "}
                      {target.name}
                    </ListItem.Title>
                  </ListItem.Content>
                </View>
              </>
            }
            isExpanded={targetExpanded}
            onPress={() => {
              setTargetExpanded(!targetExpanded);
            }}
          >
            <ScrollView contentContainerStyle={{ paddingBottom: 90 }}>
              {fetchedLanguagesList.map((item, i) => (
                <ListItem
                  key={i}
                  onPress={() => handleToLanguageSelection(item)}
                  bottomDivider
                >
                  <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                  </ListItem.Content>
                  <ListItem.Chevron />
                </ListItem>
              ))}
            </ScrollView>
          </ListItem.Accordion>
        </View>
      </View>
      
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          width: "100%",
        }}
      >
        <Icon
      name="delete"
      type="feather"
      size={30}
      color="#d97915"
      onPress={clearForms}
      containerStyle={{
        right: "38%",
        top:"70%"
       }}
    />
          <Button
          type="outline"
          buttonStyle={styles.buttonStyle}
          titleStyle={{ color: "#0b67a2" }}
          icon={{
            name: "book-reader",
            type: "font-awesome-5",
            size: 30,
            color: "#d97915",
            containerStyle: { marginRight: 10 },
          }}
          raised
          containerStyle={{
            width: 170,
            height: 45,
            marginVertical: 10,
            marginLeft: 10,
          }}
          onPress={handleTranslate}
        >
          Translate
        </Button>
     </View>
      <View style={{ flex: 1, height: "100%", padding: 10 }}>
      
        <View style={styles.inputTextBlocks}>
            <TextInput
            multiline
            maxLength={600}
            value={textToTranslate}
            onChangeText={(text) => setTextToTranslate(text)}
            style={styles.inputTextStyle}
          />
        </View>
        <View style={styles.inputTextBlocks}>
          <TextInput style={styles.inputTextStyle} 
          multiline 
          readOnly= {true}>
            {translated}
          </TextInput>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    width: "100%",
    backgroundColor: "#ecf2ae",
  },
  inputTextBlocks: {
    width: "100%",
    height: "50%",
  },
  inputTextStyle: {
    height: "99%",
    borderWidth: 2,
    padding: 10,

    borderColor: "#b2c75b",
    backgroundColor: "#fdffea",
  },
});
