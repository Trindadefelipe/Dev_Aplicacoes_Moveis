import { View, StyleSheet, Text, ScrollView } from "react-native";
import Caixa from "../components/Caixa";

export default function ScrollList() {
  return (
    <View style={estilos.container}>
      <ScrollView style={estilos.scroll}>
        <Caixa texto="Caixa 1" />
        <Caixa texto="Caixa 2" />
        <Caixa texto="Caixa 3" />
        <Caixa texto="Caixa 4" />
        <Caixa texto="Caixa 5" />
        <Caixa texto="Caixa 6" />
        <Caixa texto="Caixa 7" />
        <Caixa texto="Caixa 8" />
        <Caixa texto="Caixa 9" />
        <Caixa texto="Caixa 10" />
      </ScrollView>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "#cb4f4f",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 12,
  },
  scroll: {
    flex: 1,
    width: '100%',
  }
});
