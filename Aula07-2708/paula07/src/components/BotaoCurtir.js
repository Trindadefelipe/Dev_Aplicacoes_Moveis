import { Button } from "react-native";


export default function BotaoCurtir({nomePost, aoPressionar}){
    return(
        <Button
            title="Curtir"
            cor="#EF476F"
            onPress={() => aoPressionar(nomePost)}
        />
    )
}