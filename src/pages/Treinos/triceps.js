import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function Triceps(){

  return(
    <View style={styles.container}>
      <Text>TREINAO DE TRICEPS NO COMPONENT</Text>
      <Text>TRICEPS</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  }
})