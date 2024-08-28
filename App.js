import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/pages/Home";
import Pessoas from "./src/pages/Pessoas";
import DetalhesPessoa from "./src/pages/DetalhesPessoa";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen component={DetalhesPessoa} name="DetalhesPessoa" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
