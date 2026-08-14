import { View, Text, StyleSheet } from "react-native";

export function Caixa({ cor, numero }) {
  return (
    <View style={[estilo.caixa, { backgroundColor: cor }]}>
      <Text style={estilo.texto}>{numero}</Text>
    </View>
  );
}
export function Circle({ cor, numero }) {
  return (
    <View style={[estilo.circle, { backgroundColor: cor }]}>
      <Text style={estilo.texto}>{numero}</Text>
    </View>
  );
}

const estilo = StyleSheet.create({
  caixa: {
    width: 80,
    height: 80,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "red",
    justifyContent: "center",
    margin: 10,
  },
  texto: {
    color: "rgb(0, 0, 0)",
    fontSize: 14,
    fontWeight: "bold",
    alignItems: "center",
  },
  circle: {
    width: 80,
    height: 80,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "red",
    justifyContent: "center",
    margin: 10,
    borderRadius: 100
  },
});
