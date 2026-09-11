import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Movements({ data }) {
  return (
    <TouchableOpacity style={estilo.container}>
      <Text style={estilo.date}>{data.date}</Text>
      <View style={estilo.content}>
        <Text style={estilo.label}>{data.label}</Text>
        <Text style={data.type === 1 ? estilo.value: estilo.expense}>
           R$ {data.type === 1 ? `${data.value}`: `-${data.value}` }
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    marginStart: 14,
    marginEnd: 14,
    borderBottomWidth: 0.5,
    borderBottomColor: "#DADADA",
    marginTop: 10
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    marginBottom: 2,
  },
  date: {
    color: "#DADADA",
  },
  label: {
    fontWeight: "bold",
    fontSize: 16
  },
  value: {
    fontSize: 16,
    color: "#2ECC71",
    fontWeight: "bold"
  },
  expense: {
    fontSize: 16,
    color: "#E74C3C",
    fontWeight: "bold"
  },
});
