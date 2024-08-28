import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Pessoas() {
  return (
    <View style={styles.container}>
      <Text>Pessoas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});
