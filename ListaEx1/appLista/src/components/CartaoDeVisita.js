import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

export default function CartaoDeVisita({ nome, profissao }) {
  return (
    <View style={estilo.container}>
      <Text style={estilo.name}>{nome}</Text>
      <Text style={estilo.profissao}>{profissao}</Text>
      <TouchableOpacity style={estilo.botao}>Contato</TouchableOpacity>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#rgb(0, 0, 0)",
    padding: 15,
    margin: 15,
    backgroundColor: "#rgb(122, 209, 114)",
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  profissao: {
    fontSize: 10,
    color: "#rgb(77, 77, 77)",
    textAlign: "center",
  },
  botao: {
    backgroundColor: "#rgb(0, 138, 126)",
    textAlign: "center",
  },
});
