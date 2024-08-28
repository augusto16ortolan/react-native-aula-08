import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function DetalhesPessoa() {
  return (
    <View styles={styles.container}>
      <Text>DetalhesPessoa</Text>
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
