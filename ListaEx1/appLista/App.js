import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Saudacao from "./src/components/Saudacao";
import MeuNome from "./src/components/MeuNome";
import Titulo from "./src/components/Titulo";

export default function App() {
  return (
    <>
      <View style={estilos.container}>
        <Titulo
          titulo="Lista 1"
          subtitulo={"Aluno: Felipe Gabriel Alves Trindade"}
        />
        <View style={estilos.conteudo}>
          <Saudacao />
          <MeuNome nome="Felipe" sobrenome="Trindade" />
        </View>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b1aeae",
    alignItems: "center",
    justifyContent: "column",
  },
  conteudo: {
    alignItems: "center",
    justifyContent: "center",
  },
});
