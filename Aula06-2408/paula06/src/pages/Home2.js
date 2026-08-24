import { FlatList } from "react-native";
import ItemContato from "../components/ItemContato";

const CONTATOS = [
  {
    id: "1",
    nome: "Felipe Trindade",
    cargo: "Desenvolvedor Junior",
    icone: "user",
  },
  { id: "2", nome: "Higor Bueno", cargo: "Mecânico", icone: "user" },
  { id: "3", nome: "João", cargo: "Cozinheiro", icone: "user" },
  { id: "4", nome: "Higor Domingos", cargo: "Cowboy", icone: "user" },
];

export default function Home2() {
  return(
    <FlatList 
        data={CONTATOS} 
        keyExtractor={(item) => item.id} 
        renderItem={({ item }) => <ItemContato contato={item}/>}
    />
  )
}
