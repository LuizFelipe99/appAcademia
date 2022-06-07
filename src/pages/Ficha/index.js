import React, { useRef }  from 'react';
import { View, Text, StyleSheet, TouchableOpacity  } from 'react-native';
import { Modalize } from 'react-native-modalize';
import Peito from '../Treinos/peito';
import Triceps from '../Treinos/triceps';
import Costas from '../Treinos/costas';
import Biceps from '../Treinos/biceps';
import Pernas from '../Treinos/pernas';
import Ombros from '../Treinos/ombros';

export default function Ficha(){
  const idade = 22;
  const peso = 70;
  const altura = 1.73;
  const imc = 10
  const gordura = '5';
  const nivel = 'Iniciante';

  //modal do peitoral
  const modalizePeito = useRef(null);

  function onOpenPeito(){
    modalizePeito.current?.open();
  }
  
  //modal do triceps
  const modalizeTriceps = useRef(null);
  function onOpenTriceps(){
    modalizeTriceps.current?.open();
  }
  
  //modal costas
  const modalizeCostas = useRef(null);
  function onOpenCostas(){
    modalizeCostas.current?.open();
  }
  //modal biceps
  const modalizeBiceps = useRef(null);
  function onOpenBiceps(){
    modalizeBiceps.current?.open();
  }
  
  //modal pernas
  const modalizePernas = useRef(null);
  function onOpenPernas(){
    modalizePernas.current?.open();
  }
  //modal ombros
  const modalizeOmbros = useRef(null);
  function onOpenOmbros(){
    modalizeOmbros.current?.open();
  }
  

  return(
    <View style={styles.container}>
      <View style={styles.dadosArea}>
        <Text style={styles.textDados}> Idade: { idade } </Text>
        <Text style={styles.textDados}> Peso Atual: { peso } </Text>
        <Text style={styles.textDados}> Altura: { altura } </Text>
        <Text style={styles.textDados}> IMC: { imc } </Text>
        <Text style={styles.textDados}> Gogruda %: { gordura } </Text>
        <Text style={styles.textDados}> Nível: { nivel } </Text> 
      </View>
      <View style={styles.treinoAreaTronco}>
        <TouchableOpacity onPress={onOpenPeito}>
          <Text style={styles.areasCorpoText} >PEITO</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onOpenCostas}>
          <Text style={styles.areasCorpoText} >COSTAS</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.treinoAreaBracos}>
        <TouchableOpacity onPress={onOpenTriceps}>
          <Text style={styles.areasCorpoText} >TRICEPS</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onOpenBiceps}>
          <Text style={styles.areasCorpoText} >BICEPS</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.treinoAreaOutros}>
        <TouchableOpacity onPress={onOpenPernas}>
          <Text style={styles.areasCorpoText} >PERNAS</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onOpenOmbros}>
          <Text style={styles.areasCorpoText} >OMBROS</Text>
        </TouchableOpacity>
      </View>        

      <Modalize ref={modalizePeito} snapPoint={300}>
        <Peito/>
      </Modalize>

       <Modalize ref={modalizeTriceps} snapPoint={300} >
        <Triceps/>
      </Modalize>

      <Modalize ref={modalizeCostas} snapPoint={300} >
        <Costas/>
      </Modalize>

      <Modalize ref={modalizeBiceps} snapPoint={300} >
        <Biceps/>
      </Modalize>

      <Modalize ref={modalizePernas} snapPoint={300} >
        <Pernas/>
      </Modalize>

       <Modalize ref={modalizeOmbros} snapPoint={300} >
        <Ombros/>
       </Modalize>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#58E8AF',
  },
  dadosArea: {
    marginLeft: '5%',
    marginTop: '25%',
    backgroundColor: '#90EBC0',
    marginRight: '5%',
    marginBottom: '5%',
    borderRadius: 30,
    padding: 10 ,
    
  },
  textDados: {
    fontSize: 20,
  },
  treinoAreaTronco: {
    marginLeft: '5%',
    backgroundColor: '#90EBC0',
    marginRight: '5%',
    marginBottom: '5%',
    borderRadius: 30,
    padding: 10 ,
  },
  treinoAreaBracos: {
    marginLeft: '5%',
    backgroundColor: '#90EBC0',
    marginRight: '5%',
    marginBottom: '5%',
    borderRadius: 30,
    padding: 10 ,
    
  },

  treinoAreaOutros: {
    marginLeft: '5%',
    backgroundColor: '#90EBC0',
    marginRight: '5%',
    marginBottom: '5%',
    borderRadius: 30,
    padding: 10 ,
  },
  areasCorpoText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
    marginBottom: '10%',
  }
})