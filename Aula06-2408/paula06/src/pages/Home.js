import { Text, View, StyleSheet, FlatList } from "react-native";

const FRUTAS = [
  "Maça",
  "Banana",
  "Ameixa",
  "Morango",
  "Uva",
  "Melancia",
  "Manga",
];

export default function Home() {
  return (
    <View style={estilos.container}>
      <Text>Página Home</Text>
      <FlatList
        data={FRUTAS}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={estilos.linha}>
            <Text style={estilos.texto}>{item}</Text>
          </View>
        )}
        contentContainerStyle={estilos.conteudo}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(148, 253, 255)",
    alignItems: "center",
  },
  linha: {
    backgroundColor: "rgb(255, 254, 254)",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: "rgb(162, 162, 162)",
    marginTop: 5,
  },
  texto: {
    fontSize: 16,
    fontStyle: "italic",
  },
  conteudo: {
    paddingTop: 60
  }
});
