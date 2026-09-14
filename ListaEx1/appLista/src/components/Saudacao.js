import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';

export default function Saudacao(){
    return(
        <View>
            <Text style={estilo.saudacao}>Minha Primeira Aula de React Native</Text>
        </View>
    )
}

const estilo = StyleSheet.create({
    saudacao: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 22
    }
})