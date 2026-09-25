import {createNativeStackNavigator} from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";

const Stack = createNativeStackNavigator();

import TelaDetalhes from "../pages/TelaDetalhes";

export default function RootNavigator(){
    return(
        <Stack.Navigator id='RootStack'>
            <Stack.Screen name="Principal" component={TabNavigator} /> 
            <Stack.Screen name="Detalhes" component={TelaDetalhes} /> 
        </Stack.Navigator>
    )
}