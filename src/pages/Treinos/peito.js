import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';

export default function Peito(){

  return(
    <View style={styles.container}>
      <View style={styles.exercicios} >
        <View style={styles.descricao}>
          <Text style={styles.txtDescricao}> Supino Reto </Text>
          <Text style={styles.txtDescricao}> Dificuldade: Médio </Text>
          <View style={styles.areaimg}>
            <Image
              style={styles.img}
              source={{uri: 'https://blog.integralmedica.com.br/wp-content/uploads/2021/04/supino-reto-o-que-e-como-fazer-variacoes-e-erros-blog-integral-imagem.jpg'}}
            /> 
          </View>
          <View style={styles.areaDesc}>
            <Text style={styles.txtDescricao}> 1 - Deite-se no banco com os pés no chão. Com os braços retos, desenrole a barra. </Text>
            <Text style={styles.txtDescricao}> 2 - Abaixe a barra até o meio do peito </Text>
            <Text style={styles.txtDescricao}> 3 - Levante a barra até travar os cotovelos. </Text>
          </View>
        </View>
      </View>

      <View style={styles.exercicios} >
        <View style={styles.descricao}>
          <Text style={styles.txtDescricao}> Crucifixo com Halter </Text>
          <Text style={styles.txtDescricao}> Dificuldade: Médio </Text>
          <View style={styles.areaimg}>
            <Image
              style={styles.img}
              source={{uri: 'https://womenshealthbrasil.com.br/wp-content/uploads/sites/6/2019/12/shutterstock_609597635.jpg'}}
            /> 
          </View>
          <View style={styles.areaDesc} >
            <Text style={styles.txtDescricao}> 1 - Deite-se no banco e coloque os pés no chão. </Text>
            <Text style={styles.txtDescricao}> 2 - Comece o exercício com os halteres juntos acima do peito, cotovelos levemente dobrados. </Text>
            <Text style={styles.txtDescricao}> 3 - Abaixe os pesos simultaneamente para ambos os lados. </Text>
            </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  exercicios: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#a5fec9',
    borderRadius: 20,
    marginLeft: '2%',
    marginRight: '2%',
    marginTop: '2%',
    marginBottom: '2%',
  },  
  descricao: {
    marginLeft: '5%',
    marginTop: '5%',
    marginBottom: '5%',
  },
  txtDescricao: {
    fontSize: 20,
  },
  img: {
    width:'90%' ,
    height: 200,
    marginTop: '5%',
    borderRadius: 10,
    marginBottom: '5%',
    
  },
  areaimg: {
    flex:1,
    height: '100%',
    alignItems: 'center',
  },
  txtBtn: {
    fontSize: 20,
    color: '#fff',
  },
  areaDesc: {
    backgroundColor: '#79ffa5',
    borderRadius: 10,
    marginRight: '5%',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 10,
    padding: 10,
  },

})