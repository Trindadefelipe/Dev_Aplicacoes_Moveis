import { Button, StyleSheet, Text, View } from "react-native";

export default function Profile({navigation}){
    return(
        <View style={estilos.tela}>
            <Text style={estilos.texto}>Tela Profile</Text>
            <Button
                title="Voltar"
                color="#118AB2"
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}

const estilos = StyleSheet.create({
    tela: {
        flex: 1,
        padding: 24,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
    },
    texto: {
        fontSize: 14,
        color: "#5B5B5B",
        textAlign: "center",
        marginBottom: 24
    }
})