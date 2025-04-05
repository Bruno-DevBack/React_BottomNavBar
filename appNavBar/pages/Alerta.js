import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image, ScrollView, TextInput } from 'react-native';

export default function Playlists() {
  return (
    <SafeAreaView style={estilo.container}>
      <View style={estilo.header}>
        <Text style={estilo.titulo}>Playlists</Text>
        <TextInput 
          style={estilo.searchBar} 
          placeholder="Pesquisar..." 
          placeholderTextColor="#aaa" 
        />
      </View>

      <ScrollView horizontal contentContainerStyle={estilo.scrollContainer}>
        <View style={estilo.playlistCard}>
          <Image source={require('../assets/RUN.jpg')} style={estilo.playlistImage} />
          <Text style={estilo.playlistText}>Hip-Hop Vibes</Text>
        </View>

        <View style={estilo.playlistCard}>
          <Image source={require('../assets/FLASH.jpg')} style={estilo.playlistImage} />
          <Text style={estilo.playlistText}>Chill Beats</Text>
        </View>

        <View style={estilo.playlistCard}>
          <Image source={require('../assets/SLAVE.jpg')} style={estilo.playlistImage} />
          <Text style={estilo.playlistText}>Rock Classics</Text>
        </View>

        <View style={estilo.playlistCard}>
          <Image source={require('../assets/COOL.jpg')} style={estilo.playlistImage} />
          <Text style={estilo.playlistText}>Electronic Essentials</Text>
        </View>

        <View style={estilo.playlistCard}>
          <Image source={require('../assets/MARIAJUANA.jpg')} style={estilo.playlistImage} />
          <Text style={estilo.playlistText}>Indie Gems</Text>
        </View>
      </ScrollView>

      <ScrollView contentContainerStyle={estilo.songsList}>

        <View style={estilo.songCard}>
          <Image source={require('../assets/RUN.jpg')} style={estilo.songImage} />
          <View style={estilo.songDetails}>
            <Text style={estilo.songTitle}>RUNAWAY</Text>
            <Text style={estilo.songArtist}>Kanye West</Text>
          </View>
        </View>

        <View style={estilo.songCard}>
          <Image source={require('../assets/LOVE.jpg')} style={estilo.songImage} />
          <View style={estilo.songDetails}>
            <Text style={estilo.songTitle}>TRUE LOVE</Text>
            <Text style={estilo.songArtist}>XXXTENTACION</Text>
          </View>
        </View>

        <View style={estilo.songCard}>
          <Image source={require('../assets/TRANSFORMERS.jpg')} style={estilo.songImage} />
          <View style={estilo.songDetails}>
            <Text style={estilo.songTitle}>NUMB</Text>
            <Text style={estilo.songArtist}>Linkin Park</Text>
          </View>
        </View>

        <View style={estilo.songCard}>
          <Image source={require('../assets/luz.jpg')} style={estilo.songImage} />
          <View style={estilo.songDetails}>
            <Text style={estilo.songTitle}>VOU EMBORA AGORA</Text>
            <Text style={estilo.songArtist}>Velocidade Luz</Text>
          </View>
        </View>

        <View style={estilo.songCard}>
          <Image source={require('../assets/BOSTA.jpg')} style={estilo.songImage} />
          <View style={estilo.songDetails}>
            <Text style={estilo.songTitle}>SAGRADO PROFANO</Text>
            <Text style={estilo.songArtist}>Luíza Sonza</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:20,
    paddingHorizontal: 10,
    paddingTop: 15,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase',
    flex: 1,
  },
  searchBar: {
    height: 35,
    width: 150,
    borderRadius: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    fontSize: 14,
    borderColor: '#ddd',
    borderWidth: 1,
    marginLeft: 10,
  },
  scrollContainer: {
    paddingVertical: 10,
    paddingLeft: 10,
  },
  playlistCard: {
    marginRight: 15,
    alignItems: 'center',
  },
  playlistImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  playlistText: {
    fontSize: 14,
    color: '#000',
    marginTop: 5,
    textAlign: 'center',
  },
  songsList: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  songCard: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#333',
    borderRadius: 10,
    overflow: 'hidden',
    paddingVertical: 10,
  },
  songImage: {
    width: 60,
    height: 60,
    marginLeft:10,
    borderRadius: 10,
  },
  songDetails: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  songTitle: {
    fontSize: 18,
    color: '#fff',
  },
  songArtist: {
    fontSize: 14,
    color: '#aaa',
  },
});
