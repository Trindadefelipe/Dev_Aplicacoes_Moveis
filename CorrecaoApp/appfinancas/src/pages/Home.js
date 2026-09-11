import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import Balance from "../components/Balance";
import Actions from "../components/Actions";
import Movements from "../components/Movements";

const LIST = [
    {
        id: 1,
        label: "Aluguel",
        value: "2500,00",
        date: "01/09/2026",
        type: 0
    },
    {
        id: 2,
        label: "Salário",
        value: "4500,00",
        date: "05/09/2026",
        type: 1
    },
    {
        id: 3,
        label: "Investimento",
        value: "1275,85",
        date: "30/08/2026",
        type: 1
    },
    {
        id: 4,
        label: "Combustível",
        value: "142,75",
        date: "03/09/2026",
        type: 0
    },
    {
        id: 5,
        label: "Tênis",
        value: "389,90",
        date: "03/09/2026",
        type: 0
    },
]

export default function Home(){
    return(
        <View style={estilo.container}>
            <Header nome="Felipe Trindade" icone="user"/>
            <Balance saldo="100,00" gastos="25,75"/>
            <Actions/>
            <Text style={estilo.title}>Últimos lançamentos</Text>
            <FlatList
                data={LIST}
                keyExtractor={(item) => String(item.id)}
                renderItem={({item}) => <Movements data={item}/>}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const estilo = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fafafa"
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginStart: 14,
        marginTop: 22,
        marginBottom: 8
    }
})