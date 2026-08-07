import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Aura, { Aura9k } from './src/components/Aura';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Ola mundo!</Text>
      <Text>Felipe Trindade</Text>

      <Text style={styles.txtNegrito}>Teste 1</Text>
      <Text style={[styles.txtNegrito, styles.txtDiferente]}>Teste 2</Text>

      <View style={styles.textosJuntos}>
        <Text style={styles.txtNegrito}>AURA</Text>
        <Text style={[styles.txtNegrito, styles.txtDiferente]}> + EGO</Text>
      </View>

      <Aura />
      <Aura9k />
      <Text style={[styles.txtDiferente, styles.txtNegrito]}>
        {10+20+15-5+30-12+9}
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  txtNegrito: {
    fontWeight: 'bold',
    fontSize: 14,
  },

  txtDiferente: {
    marginTop: 10,
    color: 'red',
  },

  textosJuntos: {
    flexDirection: 'row',
  },
});