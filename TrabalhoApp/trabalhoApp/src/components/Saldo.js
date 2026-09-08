import { StyleSheet, Text, View } from "react-native";

export default function Saldo({ saldo, gasto }) {
  return (
    <>
      <View style={estilos.caixa}>
        <Text style={estilos.saldo}>
          Saldo
          R${saldo}
        </Text>
        <Text style={estilos.gasto}>
          Gasto
          R${gasto}
        </Text>
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  caixa: {
    backgroundColor: "#fff",
    marginTop: "40%",
    width: "80%",
    justifyContent: "space-between",
    flexDirection: "row",
    margin: 40
  },
  saldo: {
    color: "rgb(0, 164, 3)",
    fontWeight: "bold",
    fontSize: 20,
},
gasto: {
    color: "rgb(167, 0, 45)",
    fontWeight: "bold",
    fontSize: 20,
  },
});
