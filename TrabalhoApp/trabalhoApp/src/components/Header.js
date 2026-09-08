import { View, StyleSheet, Text } from "react-native";
import {Feather} from "@expo/vector-icons";

export default function Header({ nome, icone }) {
  return (
    <>
      <View style={estilos.cabecalho}>
        <Text style={estilos.nomeUsuario}>{nome}</Text>
        <View style={estilos.iconeCirculo}>
            <Feather
                name={icone}
                size={20}
                color={"#fff"}
            />
        </View>
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  cabecalho: {
    backgroundColor: "rgb(104, 0, 173)",
    width: "100%",
    height: "20%",
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'flex-start'
  },
  nomeUsuario: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: "left",
    color: "#fff",
    marginLeft: 10
  },
  iconeCirculo: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#b54dff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
});
