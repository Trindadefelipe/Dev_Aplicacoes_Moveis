import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from "react-native";
import { API_URL } from "../config/api";
import { useState, useEffect } from "react";

export default function ListaTarefas({navigation}){
  const [tasks, setTasks] = useState([]); 
  const [carregando, setCarregando] = useState(true); 
  const [erro, setErro] = useState(null); 
  
  async function getTasks(){
    try {
      setErro(null);
      setCarregando(true);

      const resposta = await fetch(`${API_URL}/tarefas`);
      if(!resposta.ok){
        throw new Error(`O servidor respondeu com erro! Erro: ${resposta.status}`)
      }

      const dados = await resposta.json();
      setTasks(dados);
    } catch (erro) {
      setErro(`Erro no getTasks: ${erro.message}`);
      console.log(`Erro no getTasks: ${erro.message}`);
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    getTasks();
  },[]);

  if(carregando){
    return(
      <View>
        <ActivityIndicator size="large"/>
        <Text>Carregando as tarefas...</Text>
      </View>
    )
  }

  return(
    <View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (<Text>{item.title}</Text>)}
      />
      <TouchableOpacity
        onPress={()=>navigation.navigate('NovaTarefa')}
      >
        <Text>Adicionar Nova Tarefa</Text>
      </TouchableOpacity>
    </View>
  )
}