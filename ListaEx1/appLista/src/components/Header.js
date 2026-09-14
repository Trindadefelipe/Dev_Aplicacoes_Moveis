import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.texto}>Meu App</Text>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    height: 60,
    width: "100%",
    backgroundColor: "#6A1B9A",
    justifyContent: "center",
    alignItems: "center",
  },
  texto: {
    color: "#fff",
    fontSize: 15
  },
});
