import { StyleSheet } from "react-native";
import { Text } from "react-native";


export default function Titulo({titulo, subtitulo}){
    return(
        <>
            <Text style={estilos.titulo}>{titulo}</Text>
            <Text style={estilos.subtitulo}>{subtitulo}</Text>
        </>
    )
}

const estilos = StyleSheet.create({
    titulo: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    subtitulo: {
        fontSize: 10,
        fontStyle: 'italic'
    }
})