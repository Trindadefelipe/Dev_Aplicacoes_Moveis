import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListaTarefasScreen from '../pages/ListaTarefasScreen';
import NovaTarefaScreen from '../pages/NovaTarefaScreen';

const Stack = createNativeStackNavigator();

export default function AppStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen 
        component={ListaTarefasScreen} 
        name='Tarefas'
        options={{title:'Minhas Tarefas'}}
      />
      <Stack.Screen 
        component={NovaTarefaScreen} 
        name='NovaTarefa'
        options={{title:'Nova Tarefa'}}
      />
    </Stack.Navigator>
  )
}