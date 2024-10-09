import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://mongodbhomeservices.onrender.com/clientes', {
        email,
        password,
      });

      if (response.status === 200) {
        Alert.alert('Éxito', 'Sesión iniciada exitosamente.');
      } else {
        Alert.alert('Error', 'No se pudo iniciar sesión.');
      }
    } catch (error) {
      Alert.alert('Error', 'Ocurrió un error al iniciar sesión.');
    }
  };

  return (
    <View>
      <Text>Correo electrónico</Text>
      <TextInput 
        placeholder="Ingresa tu correo" 
        value={email} 
        onChangeText={setEmail} 
        autoCapitalize="none" 
      />
      <Text>Contraseña</Text>
      <TextInput 
        placeholder="Ingresa tu contraseña" 
        value={password} 
        onChangeText={setPassword} 
        secureTextEntry 
      />
      <Button title="Iniciar sesión" onPress={handleLogin} />
    </View>
  );
};

export default LoginForm;
