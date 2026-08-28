import { Text, View } from "react-native";
import Neto from "./Neto";

export default function Filho({mensagemDoPai, caixaPostalDoPai}){
    return(
        <View>
            <Text>Eu sou o Filho!</Text>
            <Neto mensagemDoAvo={mensagemDoPai} caixaPostalDoAvo={caixaPostalDoPai}/>
        </View>
    )
}