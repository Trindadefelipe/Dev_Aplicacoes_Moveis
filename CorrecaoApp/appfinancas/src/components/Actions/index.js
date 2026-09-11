import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Actions() {
  return (
    <ScrollView
      style={estilo.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <TouchableOpacity style={estilo.actionButton}>
        <View>
          <AntDesign name="folder-add" size={26} color={"#000"} />
        </View>
        <Text style={estilo.labelButton}>Entradas</Text>
      </TouchableOpacity>
      <TouchableOpacity style={estilo.actionButton}>
        <View>
          <AntDesign name="tag" size={26} color={"#000"} />
        </View>
        <Text style={estilo.labelButton}>Compras</Text>
      </TouchableOpacity>
      <TouchableOpacity style={estilo.actionButton}>
        <View>
          <AntDesign name="credit-card" size={26} color={"#000"} />
        </View>
        <Text style={estilo.labelButton}>Carteira</Text>
      </TouchableOpacity>
      <TouchableOpacity style={estilo.actionButton}>
        <View>
          <AntDesign name="barcode" size={26} color={"#000"} />
        </View>
        <Text style={estilo.labelButton}>Pagamentos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={estilo.actionButton}>
        <View>
          <AntDesign name="setting" size={26} color={"#000"} />
        </View>
        <Text style={estilo.labelButton}>Configurações</Text>
      </TouchableOpacity>
      <TouchableOpacity style={estilo.actionButton}>
        <View>
          <AntDesign name="user" size={26} color={"#000"} />
        </View>
        <Text style={estilo.labelButton}>Usuário</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const estilo = StyleSheet.create({
  container: {
    maxHeight: 94,
    minHeight: 88,
    paddingStart: 14,
    paddingEnd: 14,
  },
  areaButton: {
    backgroundColor: "#ecf0f1",
    height: 60,
    width: 60,
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  actionButton: {
    alignItems: "center",
    marginRight: 32,
    marginTop: 5,
  },
  labelButton: {
    marginTop: 4,
    textAlign: "center",
  },
});
