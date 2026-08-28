import { Text, View, Button } from "react-native";


export default function Neto({}){
    return(
        <View>
            <Text>Eu sou neto!</Text>
            <Text>{mensagemDoAvo}</Text>
            <Button 
                title="Falar com o Avô"
                onPress={() => caixaPostalDoAvo("Bença avo")}
            />
        </View>
    )
}