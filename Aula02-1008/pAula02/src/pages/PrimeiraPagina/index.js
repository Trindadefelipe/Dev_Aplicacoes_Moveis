import React from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";

export default function PrimeiraPagina() {
    const lidarComClique = () => {
        alert('Botão clicado!');
    }
  
    return (
    <>
        <View style={estilo.container}>
            <Text style={estilo.textoPrincipal}>Felipe Trindade</Text>

            <View>
                <Text style={estilo.textoSecundario}>Analista e Desenvolvedor de Sistemas</Text>
            </View>
            <View style={estilo.containerBranco}></View>
            <View>
                <TouchableOpacity
                style={estilo.botao}
                >
                    <Text>Conectar</Text>
                </TouchableOpacity>
            </View>
        </View>
    </>
  )
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(137, 137, 137)'
    },
    containerBranco: {
        backgroundColor: 'white',
        height: 150,
        width: 150,
        marginTop: 140
    },
    textoPrincipal: {
        fontSize: 25,
        fontWeight: 'bold',
        justifyContent: 'top',
        color: 'rgb(248, 247, 247)'
    },
    textoSecundario: {
        fontSize: 17,
        fontWeight: 'bold',
        justifyContent: 'top',
        fontStyle: 'italic',
        color: 'rgb(255, 164, 164)',
        marginTop: 50
    },
    botao: {
        fontSize: 15,
        fontWeight: 300,
        width: 200,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(46, 199, 0)',
        borderRadius: 20,
        marginTop: 50
    }
})