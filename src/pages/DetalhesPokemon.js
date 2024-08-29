import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function DetalhesPokemon({ navigation, route }) {
  const { name, url } = route.params.poke;

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    obterPokemon();
  }, []);

  async function obterPokemon() {
    const response = await axios.get(url);
    setPokemon(response.data);
  }

  return (
    <View>
      {!pokemon ? (
        <Text>Carregando</Text>
      ) : (
        <Image
          height={200}
          width={200}
          source={{ uri: pokemon.sprites.front_default }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
