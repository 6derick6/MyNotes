import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [estado,setEstado] = useState('leitura');
  const [anotacao,setAnotacao] = useState('Maecenas in felis sit amet elit volutpat dictum. Curabitur a diam magna. In vitae massa leo. Phasellus blandit, turpis sit amet tempus venenatis, nulla tortor faucibus nisi, et vestibulum mi velit vel eros. Duis ultrices rutrum cursus. Etiam scelerisque lectus a lobortis aliquet. Integer semper est non iaculis aliquet. Phasellus elementum egestas posuere.');

  if(estado == 'leitura'){
  return (
    <View style={{flex:1}}>
      <View style={styles.header}><Text style={{textAlign:'center',color:'white',fontSize:18}}>App MyNotes</Text></View>

      <View style={{padding:20}}><Text style={styles.anotacao}>{anotacao}</Text></View>

      <TouchableOpacity onPress={()=> setEstado('atualizando')} style={styles.btnAnotacao}><Text style={styles.btnAnotacaoTexto}>+</Text></TouchableOpacity>  
    </View>
  );
  }else if(estado == 'atualizando'){
    return (
      <View style={{flex:1}}>
        <View style={styles.header}><Text style={{textAlign:'center',color:'white',fontSize:18}}>App MyNotes</Text></View>
  
        <TouchableOpacity onPress={()=> setEstado('leitura')} style={styles.btnSalvar}><Text style={styles.btnSalvarTexto}>Salvar</Text></TouchableOpacity>  
      </View>
    );
  }
}

const styles = StyleSheet.create({

  header:{
    width: '100%',
    padding: 20,
    backgroundColor: '#069'
  },

  anotacao:{
    fontSize: 13
  },

  btnAnotacao:{
    position:'absolute',
    right:20,
    bottom:20,
    width:50,
    height:50,
    backgroundColor:'#069',
    borderRadius:25
  },

  btnAnotacaoTexto:{
    color: 'white',
    position: 'relative',
    textAlign:'center',
    top: 0,
    fontSize:30
  },

  btnSalvar:{
    position:'absolute',
    right:0,
    bottom:20,
    width:'100%',
    paddingTop: 10,
    paddingBottom:10,
    backgroundColor:'#069'
  },

  btnSalvarTexto:{
    color: 'white',
    position: 'relative',
    textAlign:'center',
    top: 0,
    fontSize:15
  },

});

