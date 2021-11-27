import React from 'react';
import { StyleSheet, SafeAreaView, TextInput,Button, Alert } from 'react-native';
import HelloView from './component/helloView';

export default function App() {

  const [name, setName] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
      <TextInput 
      placeholder = "Enter Name"
      onChangeText = { (text) => setName(text)}
      style = {styles.input}/>
      <HelloView text = {name}></HelloView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    padding: 15,
    alignContent: 'center',
    justifyContent: 'center'
  },
  input: {
    padding: 15,
    borderWidth: 1,
    marginTop: 15,
    marginBottom:30,
    borderRadius:10,
    fontSize: 30,
    backgroundColor: '#fff'
  }
});
