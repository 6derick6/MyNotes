import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';

export default function App() {

  const [estado,setEstado] = useState('leitura');
  const [anotacao,setAnotacao] = useState('');

  function atualizarTexto(){
    setEstado('leitura');
  }

  if(estado == 'leitura'){
  return (
    <View style={{flex:1,marginTop:30}}>
      <View style={styles.header}><Text style={{textAlign:'center',color:'white',fontSize:18}}>App MyNotes</Text></View>

      {
      (anotacao != '')?  
      <View style={{padding:20}}><Text style={styles.anotacao}>{anotacao}</Text></View>
      :
      <View style={{padding:20}}><Text style={{opacity:0.3}}>Nenhuma anotação encontrada :(</Text></View>
      }

      
      
      {
      (anotacao == '')?  
      <TouchableOpacity onPress={()=> setEstado('atualizando')} style={styles.btnAnotacao}>
        <Text style={styles.btnAnotacaoTexto}>+</Text>
      </TouchableOpacity>   
      :
      <TouchableOpacity onPress={()=> setEstado('atualizando')} style={styles.btnEditar}>
        <Text style={styles.btnEditarTexto}>Editar</Text>
      </TouchableOpacity>  
      }

       
    </View>
  );
  }else if(estado == 'atualizando'){
    return (
      <View style={{flex:1,marginTop:30}}>
        <View style={styles.header}><Text style={{textAlign:'center',color:'white',fontSize:18}}>App MyNotes</Text></View>
  
        <TextInput style={{padding:20,height:300,textAlignVertical:'top'}} onChangeText={(text)=>setAnotacao(text)} multiline={true} numberOfLines={5} value={anotacao}></TextInput>

        <TouchableOpacity onPress={()=> atualizarTexto()} style={styles.btnSalvar}><Text style={styles.btnSalvarTexto}>Salvar</Text></TouchableOpacity>  
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

  btnEditar:{
    position:'absolute',
    right:0,
    bottom:20,
    width:'100%',
    paddingTop: 10,
    paddingBottom:10,
    backgroundColor:'#069'
  },

  btnEditarTexto:{
    color: 'white',
    position: 'relative',
    textAlign:'center',
    top: 0,
    fontSize:15
  }

});

