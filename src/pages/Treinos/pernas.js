import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function Pernas(){

  return(
    <View style={styles.container}>
      <Text>TREINAO DE PERNAS NO COMPONENT</Text>
      <Text>PERNAS</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  }
})