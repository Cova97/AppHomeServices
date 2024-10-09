import React, {useState} from "react";
import {View, Text, TextInput, Button, Alert} from "react-native";
import axios from "axios";

const CreateAccountForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleCreateAccount = async () => {
        if (password !== confirmPassword) {
            Alert.alert('Error', 'Las contraseñas no coinciden');
            return;
        }

        try {
            const response = await axios.post('https://mongodbhomeservices.onrender.com/clientes', {
                email,
                password
            });

            if (response.status === 200) {
                Alert.alert('Success', 'Cuenta creada exitosamente');
            } else {
                Alert.alert('Error', 'Hubo un error al crear la cuenta');
            }
        } catch (error) {
            Alert.alert('Error', 'Hubo un error al crear la cuenta');
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
            <Text>Confirmar contraseña</Text>
            <TextInput 
                placeholder="Confirma tu contraseña" 
                value={confirmPassword} 
                onChangeText={setConfirmPassword} 
                secureTextEntry 
            />
            <Button title="Crear cuenta" onPress={handleCreateAccount} />
        </View>
    )
};

export default CreateAccountForm;