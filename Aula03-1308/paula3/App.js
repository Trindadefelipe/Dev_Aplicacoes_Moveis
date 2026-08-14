import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {Caixa, Circle} from "./src/components/Caixa";

export default function App() {
  return (
    <>
      <View style={styles.containerPai}>
        <View style={styles.container}>
          <Caixa cor="#EF476F" numero={10} />
          <Caixa cor="#deef47" numero={20} />
          <Caixa cor="#07e148" numero={30} />
          <Caixa cor="#6e44f8" numero={40} />
          <Caixa cor="#e67c12" numero={50} />
          <Caixa cor="#51fef5" numero={60} />
          <Caixa cor="#fc51ee" numero={70} />

          <StatusBar style="auto" />
        </View>
        <View style={styles.container2}>
          <Circle cor="#EF476F" numero={10} />
          <Circle cor="#deef47" numero={20} />
          <Circle cor="#07e148" numero={30} />
          <Circle cor="#6e44f8" numero={40} />
          <Circle cor="#e67c12" numero={50} />
          <Circle cor="#51fef5" numero={60} />
          <Circle cor="#fc51ee" numero={70} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  containerPai:{
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'

  },
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#afafaf",
    alignItems: "center", //secundario
    justifyContent: "space-evenly", //principal
    flexWrap: 'wrap',
    alignSelf: 'flex-end'
  },
  container2: {
    flex: 1,
    backgroundColor: "rgb(119, 119, 119)",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: 'row'
  },
});
