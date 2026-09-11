import { StyleSheet, Text, View } from "react-native";

export default function Balance({ saldo, gastos }) {
  return (
    <View style={estilo.container}>
      <View style={estilo.item}>
        <Text style={estilo.titulo}>Saldo</Text>
        <View style={estilo.content}>
          <Text style={estilo.currency}>R$</Text>
          <Text style={estilo.balance}>{saldo}</Text>
        </View>
      </View>
      <View style={estilo.item}>
        <Text style={estilo.titulo}>Gastos</Text>
        <View style={estilo.content}>
          <Text style={estilo.currency}>R$</Text>
          <Text style={estilo.expense}>-{gastos}</Text>
        </View>
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingStart: 18,
    paddingEnd: 18,
    paddingTop: 22,
    paddingBottom: 22,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 6,
    marginTop: -24,
    zIndex: 99,
  },
  item: {},
  itemTitle: {},
  titulo: {
    fontSize: 20,
    color: "#DADAE1",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  currency: {
    fontSize: 12,
    color: "#DADAE1",
    marginRight: 5,
  },
  balance: {
    fontSize: 22,
    color: "#2ECC83",
  },
  expense: {
    fontSize: 22,
    color: "#EB4C3C",
  },
});
