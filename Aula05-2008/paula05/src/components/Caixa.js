import { View, StyleSheet, Text } from "react-native";
import Caixa from '../components/Caixa'


export default ({texto}) => (
    <View style={estilos.caixa}>
        <Text>{texto}</Text>
    </View>
)

const estilos = StyleSheet.create({
    caixa: {
        BackGroundColor: '#d5c8c8',
        padding: 20,
        borderRadius: 12,
        width: '80%'
    }
})