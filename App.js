import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  
  const [nome, setNome] = useState("")
  
  function emitirAlerta(){
    const regexIsBlank = /^\s*$/
    //  /^\s*$/.test(nome)
    if(regexIsBlank.test(nome) ){
      alert("Digite um nome" + nome)
      return
    }
    alert("Olá, " + nome + "! Seja bem-vindo(a)")
  }
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.titulo}>App de alerta</Text>

      <TextInput 
        style={styles.campo} 
        placeholder='Digite o seu nome'
        value={nome}
        onChangeText={(nome)=> setNome(nome)} 
      />

      <TouchableOpacity style={styles.botao} onPress={emitirAlerta}>
        <Text style={styles.textoBotao}>Mostrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 10
  },
  titulo:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:'center',
    marginTop: 20,
    marginBottom: 10
  },
  campo:{
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 10
  },
  botao:{
    backgroundColor: '#41AEF4',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBotao:{
    color: '#ffffff',
    fontSize: 17
  }
});
