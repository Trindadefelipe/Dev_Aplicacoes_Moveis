import { StyleSheet, View, Text, Platform } from "react-native";

export default function Home() {
  return (
    <>
      <View style={estilos.container}>
        <Text style={estilos.textoPrincipal}>Bem vindos ao sistema!</Text>
        <Text>{Platform.OS}</Text>
        <Text>{Platform.Version}</Text>
        <Text>{Platform.isTV?'É':'Não'}</Text>

        <View style={estilos.caixaComSombra}>
            <Text></Text>
        </View>
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(202, 195, 195)",
  },
  textoPrincipal: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#21295C",
  },
  caixaComSombra: {
    backgroundColor:'#fff',
    padding: 20,
    borderRadius: 12,
    width:'80%',
    ...Platform.select({
        ios: {
            shadowColor: 'rgb(0,0,0)',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.2,
            shadowRadius: 4,
        },
        android: {
            elevation: 6,
            
        }
    })
  }
});
