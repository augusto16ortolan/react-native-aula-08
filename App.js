import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/pages/Home";
import Pessoas from "./src/pages/Pessoas";
import DetalhesPessoa from "./src/pages/DetalhesPessoa";
import Pokemon from "./src/pages/Pokemon";
import DetalhesPokemon from "./src/pages/DetalhesPokemon";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          component={Home}
          name="Home"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          component={Pessoas}
          name="Pessoas"
          options={{
            title: "Lista de pessoas",
          }}
        />
        <Stack.Screen component={DetalhesPessoa} name="DetalhesPessoa" />
        <Stack.Screen component={Pokemon} name="Pokemon" />
        <Stack.Screen component={DetalhesPokemon} name="DetalhesPokemon" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
