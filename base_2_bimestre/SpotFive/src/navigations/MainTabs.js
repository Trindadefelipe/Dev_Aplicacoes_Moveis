import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

//Importando as telas que serão abas
import HomeStack from "./HomeStack";
import Search from "../screens/Search";
import Library from "../screens/Library";
import Premium from "../screens/Premium";
import CreatePlaylist from "../screens/CreatePlaylist";

//Instanciando um objeto de navegação do tipo BottomTab
const Tabs = createBottomTabNavigator();

export default function MainTabs(){
    return(
        <Tabs.Navigator screenOptions={{headerShown: false}}>
            <Tabs.Screen name="HomeStack" component={HomeStack} options={{title: 'Home'}} />
            <Tabs.Screen name="Search" component={Search} 
                options={{title: "Search"}}
            />
            <Tabs.Screen name="Library" component={Library} 
                options={{title: "Library"}}
            />
            <Tabs.Screen name="Premium" component={Premium} options={{title: "Premium"}}/>
            <Tabs.Screen name="CreatePlaylist" component={CreatePlaylist} options={{title: "Create"}}/>
        </Tabs.Navigator>
    )
}