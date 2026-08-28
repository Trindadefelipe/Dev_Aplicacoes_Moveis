import { View, StyleSheet } from "react-native";
import PerfilCard from "../components/PerfilCard";


export default function Home(){
    return(
        <View style={estilos.tela}>
            <PerfilCard nome="Felipe" cargo="CEO" cor="#223395"/>
            <PerfilCard nome="Daniel" cargo="PO" cor="#ad1212"/>
        </View>
    )
}
const estilos = StyleSheet.create({
    tela: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: 'rgb(161, 161, 161)'
    }
})