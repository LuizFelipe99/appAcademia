import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function Ombros(){

  return(
    <View style={styles.container}>
      <Text>TREINAO DE OMBROS NO COMPONENT</Text>
      <Text>OMBROS</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgreen',
  }
})