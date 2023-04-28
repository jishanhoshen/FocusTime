import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import Constants from "expo-constants";
import Page from "./src/components/page";
import { colors } from "./src/utils/colors";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Page />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.pink,
  },
});
