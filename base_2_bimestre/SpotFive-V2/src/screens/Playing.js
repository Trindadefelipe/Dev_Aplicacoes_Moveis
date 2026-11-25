import { Button, Text, View } from "react-native";

export default function Playing({navigation}){
    return(
        <View>
            <Text>Tocando agora</Text>
            <Button 
                title="Voltar a Home"
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}