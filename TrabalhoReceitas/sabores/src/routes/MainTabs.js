import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Tabs = createBottomTabNavigator();
const ICONES_POR_ABA ={
  ReceitasTab: {ativa: "restaurant", inativo: "restaurant-outline"},
  FavoritasTab: {ativa: "heart", inativo: "heart-outline"},
  PerfilTab: {ativa: "person", inativo: "person-outline"}
}

import TelaReceitas from "../pages/TelaReceitas";
import TelaFavoritas from "../pages/TelaFavoritas";
import TelaPerfil from "../pages/TelaPerfil";
import cores from "../theme/colors";
import { Ionicons } from "@expo/vector-icons"; 

export default function MainTabs(){
  return(
    <Tabs.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: cores.laranja,
        tabBarStyle:{height: 60},
        tabBarIcon: ({focused, size}) => {
          const icone = ICONES_POR_ABA[route, name];
          const nomeIcone = focused ? icone.ativo : icone.inativo;

          return <Ionicons name={nomeIcone} size={size} color={focused ? cores.laranja : cores.textoSecundario}/>
        }
      })}
    >
      <Tabs.Screen component={TelaReceitas} name="ReceitasTab" options={{title:"Receitas"}}/>
      <Tabs.Screen component={TelaFavoritas} name="FavoritasTab" options={{title:"Favoritos"}}/>
      <Tabs.Screen component={TelaPerfil} name="PerfilTab" options={{title:"Perfil"}}/>
    </Tabs.Navigator>
  )
}