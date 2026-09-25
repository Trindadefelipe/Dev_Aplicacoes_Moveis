import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TelaHome from "../pages/TelaHome";
import TelaSobre from "../pages/TelaSobre";

const Tab = createBottomTabNavigator();

export default function TabNavigator(){
  return(
  <Tab.Navigator screenOptions={{headerShown: false}}>
    <Tab.Screen name="Home" component={TelaHome}/>
    <Tab.Screen name="Sobre" component={TelaSobre}/>
  </Tab.Navigator>
)
}