import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListaTarefas from "../screens/ListaTarefas";
import NovaTarefa from "../screens/NovaTarefa";

const Stack = createNativeStackNavigator();

export default function AppStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: "#2563EB" },
                headerTintColor: "#FFFFFF",
                headerTitleStyle: { fontWeight: "700", fontSize: 18 },
                contentStyle: { backgroundColor: "#F3F4F6" },
            }}
        >
            <Stack.Screen 
                name="ListaTarefas" 
                component={ListaTarefas} 
                options={{ title: "Minhas Tarefas" }}
            />
            <Stack.Screen 
                name="NovaTarefa" 
                component={NovaTarefa} 
                options={{ title: "Nova Tarefa" }}
            />
        </Stack.Navigator>
    );
}