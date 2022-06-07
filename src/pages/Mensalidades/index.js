import React, { useLayoutEffect }  from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Mensalidades(){

  return(
    <View style={styles.container}>
      <Text>PAGINA DE MENSALIDADES</Text>  
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})