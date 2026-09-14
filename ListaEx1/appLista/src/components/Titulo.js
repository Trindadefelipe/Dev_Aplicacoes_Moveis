import { StyleSheet, Text, View } from "react-native";

export default function Titulo({ titulo, subtitulo }) {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>{titulo}</Text>
      <Text style={estilo.subtitulo}>{subtitulo}</Text>
    </View>
  );
}

const estilo = StyleSheet.create({
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitulo: {
    fontSize: 10,
    fontStyle: "italic",
    textAlign: "center",
  },
  container: {
    paddingBottom: 50
  }
});
