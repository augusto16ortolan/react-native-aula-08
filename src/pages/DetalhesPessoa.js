import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function DetalhesPessoa({ navigation, route }) {
  const { name, dob } = route.params.person.item;

  return (
    <View styles={styles.container}>
      <Text style={styles.text}>{name.first}</Text>
      <Text style={styles.text}>{dob.age}</Text>
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
  text: {
    fontSize: 25,
    fontWeight: "300",
  },
});
