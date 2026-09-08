import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";
import Saldo from "./src/components/Saldo";

const ICONE = [{ icone: "user" }];

export default function App() {
  return (
    <>
      <View style={estilos.container}>
        <Header nome="Felipe Trindade" icone="user" />
        <Saldo saldo={100} gasto={200} />
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: 'column',
    justifyContent: "top",
  },
});
