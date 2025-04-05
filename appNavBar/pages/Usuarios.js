import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image } from 'react-native';

export default function UserProfile() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Perfil de Usuário</Text>
      </View>

      <View style={styles.profileContainer}>
        <Image 
          source={require('../assets/profile.jpg')}
          style={styles.profileImage} 
        />
        <Text style={styles.userName}>João Silva</Text>
        <Text style={styles.userInfo}>Email: joao.silva@example.com</Text>
        <Text style={styles.userInfo}>Idade: 28 anos</Text>
      </View>

      <View style={styles.additionalInfo}>
        <Text style={styles.infoTitle}>Informações Adicionais:</Text>
        <Text style={styles.infoText}>Gostos: Música, Viagens, Tecnologia</Text>
        <Text style={styles.infoText}>Localização: São Paulo, SP</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525',
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 40,
    marginBottom: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#BDBDBD',
  },
  userInfo: {
    fontSize: 16,
    color: '#BDBDBD',
    textAlign: 'center',
    marginVertical: 5,
  },
  additionalInfo: {
    backgroundColor: '#494949',
    padding: 20,
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#c7c7c7',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#b4b4b4',
    marginBottom: 5,
  },
});
