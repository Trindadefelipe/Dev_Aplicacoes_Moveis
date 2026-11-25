import { Button, StyleSheet, Text, TouchableOpacity, View, StatusBar } from "react-native";

import {STYLES} from "../components/Styles";

import {Feather} from "@expo/vector-icons";
import MusicBox from "../components/MusicBox";

export default function Home({navigation}){
    return(
        <View style={Style.container}>
            <StatusBar style="auto" />
            <View style={Style.recomendations}>
                <View style={Style.recomendationsHeader}>
                    <Text style={Style.sectionTitle}>Bom Dia</Text>
                    <TouchableOpacity>
                        <Feather name="settings" size={20} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View style={Style.recomendationsBody}>
                    <MusicBox />
                </View>
            </View>

            <View style={Style.recents}>
            </View>

            <View style={Style.favorites}>
            </View>

            <View style={Style.playing}>
                <Button 
                    title="Player"
                    onPress={() => navigation.navigate("Playing")}
                />
            </View>
        </View>
    )
}

const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: STYLES["main-background"],
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 45
    },
    recomendations:{
        flex: 2,
    },
    recomendationsHeader:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    recomendationsBody:{
        flex: 4,
    },
    recents:{
        flex: 2,
    }, 
    favorites: {
        flex: 2,
    },
    playing:{
        flex: 1,
    },
    sectionTitle: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold"
    }
})