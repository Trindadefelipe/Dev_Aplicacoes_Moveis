import { View } from "react-native";
import Filho from "../components/Filho";

export default function Avo(){

    function mensagemDoNeto(msgNeto){
        console.log("Mensagem do neto: ", msgNeto);
    }
    return(
        <View style={{flex: 1, justifyContent: 'center', alignitems:'center'}}>
            <Filho mensagemDoPai="Olá meu neto!" caixaPostalDoPai={mensagemDoNeto}/>
        </View>
    )
}