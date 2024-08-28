import { StyleSheet, View } from "react-native";
import React from "react";
import InfoCardPessoa from "./InfoCardPessoa";

export default function CardPessoa() {
  return (
    <View style={styles.container}>
      <InfoCardPessoa label={"Nome"} info={"Augusto Kruger Ortolan"} />
      <InfoCardPessoa label={"Idade"} info={23} />
    </View>
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
  },
});
