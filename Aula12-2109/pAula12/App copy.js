//importando as bibliotecas de navegação
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//importando as telas que serão utilizadas na navegação
import Home from "./src/pages/Home";
import Sobre from "./src/pages/Sobre";

//instanciando um objeto de navegação do tipo STACK
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#21295C" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },

        }}
      >
        <Stack.Screen
          name="TelaHome"
          component={Home}
          options={{ title: "Página Principal" }}
        />
        <Stack.Screen
          name="TelaSobre"
          component={Sobre}
          options={{ title: "Página Sobre" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
