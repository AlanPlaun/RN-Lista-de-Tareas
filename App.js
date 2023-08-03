import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Inicio from './Components/Inicio';
//https://github.com/MateoGuevaraAlvarez/reactjsCitas/tree/main/src/components

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>RN - Lista de Tareas</Text>
      <Text style={styles.title}>Modo ORT</Text>
      <Inicio />
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
},
heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 7,
    color: "green",
},
});
