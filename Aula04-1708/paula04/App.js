import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { FontAwesome5, Feather } from "@expo/vector-icons";

const ITENS_MENU = [
  { icone: "user", texto: "Meu Perfil" },
  { icone: "settings", texto: "Configurações" },
  { icone: "bell", texto: "Notificações" },
  { icone: "log-out", texto: "Sair" },
];

export default function App() {
  return (
    <>
      <TouchableOpacity style={styles.container}>
        {ITENS_MENU.map((atual) => (
          <ItemMenu icone={atual.icone}
            texto={atual.texto}
            key={atual.texto}
          />
        ))}
        <StatusBar style="auto" />
      </TouchableOpacity>
      <Image 
        source={{uri: "https://conteudo.imguol.com.br/c/noticias/09/2018/11/05/bradesco-anuncia-uma-modernizacao-de-sua-marca-1541452912545_v2_450x450.jpg"}}
        style={styles.imagem}
      />
      <Image 
        source={require('./src/assets/itau.png')}
        style={styles.imagem}
      />
    </>
  );
}

function ItemMenu({ icone, texto }) {
  return (
    <View style={styles.linha}>
      <View style={styles.iconeCirculo}>
        <Feather name={icone} size={20} color="#f8f6f6" />
      </View>
      <Text style={styles.textoLinha}>{texto}</Text>
      <Feather name="chevron-right" size={20} color="#f8f6f6" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dedbdb",
    marginTop: 60,
    paddingHorizontal: 16,
  },
  linha: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "rgb(0, 0, 0)",
  },
  iconeCirculo: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#118AB2",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  textoLinha: {
    fontSize: 16,
    flex: 1,
  },
  imagem: {
    width: 300,
    height: 300,
    margin: 12
  }
});
