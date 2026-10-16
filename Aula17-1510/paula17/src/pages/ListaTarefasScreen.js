import { useState } from 'react';
import {Text, View} from 'react-native';
import { API_URL } from '../config/api';

export default function ListaTarefasScreen(){
  //Dados vindos da API
  const [filmes, setFilmes] = useState([]);
  //Interruptor para informar se ja carregou
  const [carregando, setCarregando] = useState(true);
  //Erros
  const [erro, setErro] = useState(null);
  
  //Função que obtem os dados da API
  async function getData(){
    try {
      setErro(null);
      const resposta = await fetch(`${API_URL}/movies.json`);
      
      if(!resposta.ok){
        throw new Error('O servidor respondeu com erro! Erro: ' + resposta.status);
      }

      const dados = await resposta.json();

      setFilmes(dados);
      console.log(`Dados vindos da API: ${dados}`);
    } catch (error) {
      setErro(error.message);
    } finally {
      setCarregando(false);
    }
  } 

  return(
    <View>
      <Text>Lista de tarefas</Text>
    </View>
  )
}