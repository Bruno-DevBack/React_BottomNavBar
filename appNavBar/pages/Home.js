import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';

export default function Home() {
  return (
    <SafeAreaView style={estilo.conteiner}>
    <View style={estilo.topleft}>
      <Text style={estilo.titulo}>
        Guris-Music
      </Text>
    </View>
    </SafeAreaView>
  );
}

const estilo = StyleSheet.create({
  conteiner:{
    flex: 1
  },
  topleft: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 30,
    paddingLeft: 10, 
    marginTop: 5,
    marginLeft:5,
  },
  titulo: {
    fontSize: 18,
    color: 'black',
  },
});
