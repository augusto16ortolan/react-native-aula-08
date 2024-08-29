import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Pokemon({ navigation }) {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    obterPokemons();
  }, []);

  async function obterPokemons() {
    setLoading(true);
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
    setPokemon(response.data.results);
    setLoading(false);
  }

  return (
    <View>
      {loading ? (
        <ActivityIndicator size={"large"} />
      ) : (
        pokemon.map((item) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("DetalhesPokemon", { poke: item });
            }}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
