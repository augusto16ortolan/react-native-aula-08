import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CardPessoa from "../components/CardPessoa";

export default function Pessoas({ navigation }) {
  const [pessoas, setPessoas] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    obterPessoas();
  }, []);

  async function obterPessoas() {
    setLoading(true);
    const response = await axios.get("https://randomuser.me/api/?results=5");
    setPessoas(response.data.results);
    console.log(pessoas);
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <FlatList
          style={{ width: "100%" }}
          data={pessoas}
          keyExtractor={(item) => item.email}
          renderItem={(item) => (
            <CardPessoa
              pessoa={item}
              irAteDetalhes={() =>
                navigation.navigate("DetalhesPessoa", {
                  person: item,
                })
              }
            />
          )}
        />
      )}
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
