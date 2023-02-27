import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { TouchableHighlight } from 'react-native-web';

export default function App() {
  const [number, setNumber] = useState(0);
 function increment()
 {
  setNumber(number+1);
  console.log(number);
 }

 function reset()
 {
  setNumber(0)
 }

 function showAbout()
 {
  Alert.alert("Névejegy","Baráth Dávid", "Szoft 2 N, 2023-02-27");
 }

  return (
    <View style={styles.container}>
      <Button title='névjegy' onPress={showAbout}/>
      <Text style={[styles.szoveg,styles.margo]}>ForgalomSzámlálás</Text>
      <Button onPress={increment} title='számol'/>
      <Text style={styles.margo}>Megyszámolt jármüvek: {number}</Text>
      <TouchableHighlight onPress={reset} style={[styles.counterButton,styles.margo]}>
        <Text style={styles.szoveg}>Nullázás</Text>
      </TouchableHighlight>
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
  szoveg: {
    color:'Black',
    fontWeight:'600',
    textAlign:'center'
   },
   margo: {
    marginBottom: 16,
    marginTop:16
   },
   counterButton: {
    backgroundColor:'lightblue',
    padding: 8,
    width: '80%',
    borderRadius: 3
   }
   
});
