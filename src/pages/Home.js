import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function Home({ navigation }) {
  const irParaListaDePessoas = () => navigation.navigate("Pessoas");

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={irParaListaDePessoas}>
        <Text style={styles.buttonText}>Lista de Pessoas</Text>
      </TouchableOpacity>
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
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 60,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#f58733",
  },
  buttonText: {
    fontSize: 22,
    fontWeight: "600",
  },
});
