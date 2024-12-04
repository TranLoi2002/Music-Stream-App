import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { apiUsers } from '../api';

export default function Register({ navigation }) {
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 

  const handleRegister = async () => {
    if (!name || !email || !password) {
      alert( 'All fields are required.');
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address (@gmail.com).');
      return;
    }

    if (password.length < 6) {
      alert('Password must be more than 6 characters.');
      return;
    }

    try {
      // Kiểm tra email đã tồn tại hay chưa
      const checkResponse = await fetch(apiUsers);
      const users = await checkResponse.json();
      const existingUser = users.find(user => user.email === email);

      if (existingUser) {
        alert( 'The email address is already registered. Please use a different email.');
        return;
      }

      // Thực hiện đăng ký nếu email chưa tồn tại
      const response = await fetch(apiUsers, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (response.ok) {
        alert( 'You can now log in with your account.');
        navigation.navigate('Login');
      } else {
        alert('Please check your details and try again.');
      }
    } catch (error) {
      alert('An error occurred, please try again.');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../assets/HinhNen/hinhnen.jpg')}
        style={styles.backgroundImage}
        imageStyle={{ opacity: 0.8 }}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Register</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="#999"
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#999"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}>Already have an account? Login here.</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    height: '100%',
  },
  title: {
    fontSize: 32,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 25,
    marginBottom: 15,
    color: '#fff',
  },
  button: {
    backgroundColor: '#e91e63',
    padding: 15,
    borderRadius: 25,
    width: '80%',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  link: {
    color: '#2196f3',
    marginTop: 15,
  },
});
