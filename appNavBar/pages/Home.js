import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';

export default function Home() {
  return (
    <SafeAreaView style={estilo.container}>
        <Text style={estilo.titulo}>Guris-Music</Text>

      <ScrollView contentContainerStyle={estilo.cardsContainer}>
        <View style={estilo.card}>
          <Image source={require('../assets/RUN.jpg')} style={estilo.cardImage} />
          <Text style={estilo.cardText}>RUNAWAY - KANYE WEST</Text>
        </View>

        <View style={estilo.card}>
          <Image source={require('../assets/LOVE.jpg')} style={estilo.cardImage} />
          <Text style={estilo.cardText}>TRUE LOVE - XXXTENTACION</Text>
        </View>

        <View style={estilo.card}>
          <Image source={require('../assets/TRANSFORMERS.jpg')} style={estilo.cardImage} />
          <Text style={estilo.cardText}>NUMB - LINKIN PARK</Text>
        </View>

        <View style={estilo.card}>
          <Image source={require('../assets/luz.jpg')} style={estilo.cardImage} />
          <Text style={estilo.cardText}>VOU EMBORA AGORA - VELOCIDADE LUZ</Text>
        </View>

        <View style={estilo.card}>
          <Image source={require('../assets/BOSTA.jpg')} style={estilo.cardImage} />
          <Text style={estilo.cardText}>SAGRADO PROFANO - LUÍZA SONZA</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525', // Removido marginBottom
  },
  titulo: {
    marginTop:55,
    marginLeft:15,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase',
  },
  cardsContainer: {
    marginTop: 80,
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#333',
    marginTop: -30,
    marginBottom: 70,
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 250,
  },
  cardText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    padding: 10,
  },
});
