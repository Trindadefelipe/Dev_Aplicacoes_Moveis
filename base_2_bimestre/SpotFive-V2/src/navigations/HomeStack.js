import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Home from "../screens/Home";
import Playing from "../screens/Playing";

const Stack = createNativeStackNavigator();

export default function HomeStack(){
    return(
        <Stack.Navigator
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Playing" component={Playing} />
        </Stack.Navigator>
    )
}