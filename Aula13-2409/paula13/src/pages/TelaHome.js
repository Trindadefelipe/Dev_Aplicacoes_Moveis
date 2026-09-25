import { Button, SafeAreaView, StyleSheet, Text } from "react-native";

export default function TelaHome({navigation}){
    return(
        <SafeAreaView style={estilo.tela}>
            <Text style={estilo.titulo}>Home</Text>
            <Text style={estilo.nota}>Use o gesto de arrastasr o botão</Text>
            <Button
                title="Abrir detalhes"
                onPress={() => navigation.getParent('RootStack')?.navigate('Detalhes')}
            />
        </SafeAreaView>
    )
}

const estilo = StyleSheet.create({
    tela: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: '#fff'
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#21295C' 
    },
    nota: {
        fontSize: 14,
        color: '#5b5b5b',
        textAlign: "center",
        marginTop: 24
    }
})