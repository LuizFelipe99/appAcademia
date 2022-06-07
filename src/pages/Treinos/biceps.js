import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function Biceps(){

  return(
    <View style={styles.container}>
      <Text>TREINAO DE BICEPS NO COMPONENT</Text>
      <Text>BICEPS</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  }
})