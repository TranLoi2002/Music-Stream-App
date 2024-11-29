import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import {apiLogin,linkImgBg} from '../api';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try { 
      const response = await fetch(apiLogin); 
      const users = await response.json(); 
      console.log(users);
      const user = users.find(u => u.email === email && u.password === password); 
      if (user) { // Xử lý khi đăng nhập thành công 
        alert('Login Successful', 'You have successfully logged in!');  
        navigation.navigate('Tabs');
        } 
      else { // Xử lý lỗi đăng nhập 
          alert('Login Failed', 'Invalid email or password. Please try again.'); 
        } 
        } 
    catch (error) { // Xử lý lỗi khi gọi API 
      alert('Error', 'An error occurred. Please try again.'); console.error(error); }
  };

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../assets/HinhNen/hinhnen.jpg')}// Cập nhật với URL chính xác
        style={styles.backgroundImage}
        imageStyle={{ opacity: 0.8 }} // Đặt độ mờ cho ảnh nền
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Login</Text>
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
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.link}>Don't have an account? Register here.</Text>
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
    height:'100%',
    justifyContent:'center'
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
