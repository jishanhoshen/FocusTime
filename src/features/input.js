import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

export const Input = () => {
  const [text, setText] = React.useState("");
  console.log(text);
  return (
    <View style={styles.container}>
      <TextInput
        label="Email"
        value={text}
        onChangeText={(text) => setText(text)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
});
