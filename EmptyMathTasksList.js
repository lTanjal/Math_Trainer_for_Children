import { Text, StyleSheet } from "react-native";
import { Icon } from "@rneui/base";
export default function EmptyList({ isEmpty }) {
  return isEmpty ? (
    <Text style={styles.emptyListStyle}>
      <Icon
        name="addfile"
        type="antdesign"
        size={30}
        color="#d97915"
        style={{ marginRight: 10 }}
      />
      No selected task
    </Text>
  ) : null;
}

const styles = StyleSheet.create({
  emptyListStyle: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
    marginTop: 70,
  },
});
