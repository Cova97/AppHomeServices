import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const API_URL = 'https://mongodbhomeservices.onrender.com/clientes'; // URL de tu API en Render

const ApiConnector = () => {
  const [clientes, setClientes] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Función para obtener datos de la API
    const fetchClientes = async () => {
      try {
        setLoading(true); // Muestra el spinner
        const response = await axios.get(API_URL); // Solicitud GET
        setClientes(response.data); // Almacena los clientes en el estado
      } catch (err) {
        setError('Error al conectarse a la API');
      } finally {
        setLoading(false); // Oculta el spinner
      }
    };

    fetchClientes(); // Llamada a la función para obtener los datos
  }, []);

  // Si está cargando, mostramos un spinner
  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  // Si hay un error, lo mostramos en pantalla
  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  // Renderizar la lista de clientes
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Clientes:</Text>
      {clientes.map((cliente) => (
        <View key={cliente.clave_cliente} style={styles.clienteItem}>
          <Text style={styles.clienteText}>
            {cliente.nombre_completo_cliente}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  clienteItem: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  clienteText: {
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
});

export default ApiConnector;
