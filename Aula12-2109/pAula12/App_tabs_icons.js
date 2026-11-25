import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import Home from "./src/pages/Home";
import Profile from "./src/pages/Profile";
import Sobre from "./src/pages/Sobre";

import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={(route) => ({
          tabBarActiveTintColor: "#118AB2",
          tabBarInactiveTintColor: "#5B5B5B",
          tabBarStyle: {height: 70, paddingBottom: 8},
          tabBarIcon: ({color, size}) => {
            const nomeIcone = 
              route.name === "Home" ? "home" :
              route.name === "Profile" ? "user" :
              "book";
            return <Feather name={nomeIcone} color={color} size={size}/>
          }
        })}
      >
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Profile" component={Profile}/>
        <Tab.Screen name="Sobre" component={Sobre}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}