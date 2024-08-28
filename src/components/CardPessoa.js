import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import InfoCardPessoa from "./InfoCardPessoa";

export default function CardPessoa({ pessoa, irAteDetalhes }) {
  return (
    <TouchableOpacity style={styles.container} onPress={irAteDetalhes}>
      <InfoCardPessoa label={"Nome"} info={pessoa.item.name.first} />
      <InfoCardPessoa label={"Idade"} info={pessoa.item.dob.age} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: "100%",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
  },
});
