import { NavigationContainer } from "@react-navigation/native";
import MainTabs from './MainTabs';

export default function Start(){
    return(
        <NavigationContainer>
            <MainTabs />
        </NavigationContainer>
    )
}