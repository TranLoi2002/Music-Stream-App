
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const FirstPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/HinhNen/hinhnen.jpg')}
        style={styles.backgroundImage}
        imageStyle={{ opacity: 0.8 }}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Your Music</Text>
          <Text style={styles.subtitle}>Your Artists</Text>
          <TouchableOpacity 
            style={styles.createAccountButton} 
            onPress={() => navigation.navigate('Register')}
          >
            <Text style={styles.buttonText}>Create an account</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.existingAccountButton} 
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.buttonText}>I already have an account</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 32,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 24,
    color: '#b3b3b3',
    textAlign: 'center',
    marginBottom: 20,
  },
  createAccountButton: {
    backgroundColor: '#e91e63',
    padding: 15,
    borderRadius: 25,
    width: '80%',
    alignItems: 'center',
    marginVertical: 10,
  },
  existingAccountButton: {
    backgroundColor: '#2196f3',
    padding: 15,
    borderRadius: 25,
    width: '80%',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default FirstPage;
