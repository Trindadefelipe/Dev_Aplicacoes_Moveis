import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Saudacao from "./src/components/Saudacao";
import MeuNome from "./src/components/MeuNome";
import Titulo from "./src/components/Titulo";
import Header from "./src/components/Header";
import CartaoDeVisita from "./src/components/CartaoDeVisita";

export default function App() {
  return (
    <>
      <View style={estilo.container}>
        <View>
          <Titulo
            style={estilo.cabecalho}
            titulo="Lista 1"
            subtitulo={"Aluno: Felipe Gabriel Alves Trindade"}
          />
        </View>

        <Header/>

        <CartaoDeVisita nome="Felipe" profissao="Desenvolvedor Junior" />

        <View>
          <Text>Olá, Mundo!</Text>
        </View>
        <View>
          <Saudacao />
          <MeuNome nome="Felipe" sobrenome="Trindade" />
        </View>
        <TouchableOpacity style={estilo.botao}>
          <Text>Botão</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b1aeae",
    flexDirection: "column",
    alignItems: "center",
  },
  cabecalho: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  botao: {
    backgroundColor: "#007BFF",
    color: "#FFFFFF",
    padding: 10,
    borderRadius: 5,
  },
  helloWorld: {
    
  }
});
