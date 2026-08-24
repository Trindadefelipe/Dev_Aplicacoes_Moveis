import { View, StyleSheet, Text } from "react-native";
import {Feather} from '@expo/vector-icons';

export default function ItemContato({ contato }) {
  return (
    <View style={estilos.linha}>
      <View style={estilos.iconeCirculo}>
        <Feather
            name={contato.icone}
            size={20}
            color={'#fff'}
        />
      </View>
      <View style={estilos.textos}>
        <Text style={estilos.nome}>{contato.nome}</Text>
        <Text style={estilos.cargo}>{contato.cargo}</Text>
      </View>
    </View>
  );
}
const estilos = StyleSheet.create({
  linha: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
  },
  iconeCirculo: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#118AB2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  textos: {
    flex: 1,
  },
  nome: {
    fontsize: 16,
    fontWeight: 'bold',
    color: '#21295C',
  },
  cargos: {
    fontSize: 13,
    color: '#777'
  }
});
