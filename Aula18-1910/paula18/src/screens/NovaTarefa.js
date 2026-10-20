import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";


export default function ListaTarefas(navigation){
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [enviando, setEnviando] = useState(false);

  async function saveTask(){
    if(!titulo.trim()){
      console.log("Título da tarefa e obrigatório");
      Alert.alert("Ops!", "Título da tarefa é obrigatório");
      return;
    }
    setEnviando(true);

    try {
      const response = await fetch(`${API_URL}/tarefas`, {
        method: "POST",
        header: {"Content-Type": "application/json"},
        body: JSON.stringify({titulo, descricao})
      });

      if(!response.ok){
        const corpoErro = await response.json().catch(() => ({}));

        console.log(`Erro ao enviar tarefa para o servidor! Erro: ${corpoErro}`);
        throw new Error(`Erro ao enviar tarefa para o servidor! Erro: ${corpoErro}`);
      }

      navigation.goBack();
    } catch (erro) {
      Alert.alert("Erro ao salvar","Erro ao salvar tarefa no servidor");
    } finally {
      setEnviando(false);
    }
  }

  return(
    <ScrollView>
      <Text>Nova Tarefa</Text>

      <View>
        <TextInput
          placeholder="Ex: Envia e-mail para o cliente..."
          value={titulo}
          onChangeText={setTitulo}
        />
      </View>
      <View>
        <Text>Descrição da tarefa</Text>
        <TextInput
          placeholder="Detalhes da tarefa XPTO..."
          value={descricao}
          onChangeText={setDescricao}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
      >
        <Text>Cancelar</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}