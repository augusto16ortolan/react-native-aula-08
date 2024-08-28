import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function DetalhesPessoa({ navigation, route }) {
  const { name, dob, picture } = route.params.person.item;

  return (
    <View styles={styles.container}>
      <Image source={{ uri: picture.large }} height={200} width={200} />
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
