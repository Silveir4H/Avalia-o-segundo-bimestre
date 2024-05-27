import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View } from 'react-native';
import Kaue from './SRC/componentes/Kaue';
import Guilherme from './SRC/componentes/Guilherme';
import Eduardo from './SRC/componentes/Eduardo';
import Ana from './SRC/componentes/AnaLivia';

export default function App() {
  return (
    <View style={styles.container}>
      <Kaue/>
      <Guilherme/>
      <Eduardo/>
      <Ana/>
      
      <Button
        title="Enviar"
      />
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#67b79e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
