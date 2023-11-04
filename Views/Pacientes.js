import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
 

const Stack = createStackNavigator();

const TableApp = ( { navigation } ) => {
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState([]);

  const filteredData = data.filter((item) => {
    return (
      item.columna1.toLowerCase().includes(searchText.toLowerCase()) ||
      item.columna2.toLowerCase().includes(searchText.toLowerCase()) ||
      item.columna3.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  const addData = () => {
    const newData = {
      id: data.length + 1,
      columna1: 'Nuevo Dato',
      columna2: 'Nueva Info',
    };
    setData([...data, newData]);
  };

  const removeData = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar..."
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <View style={styles.row}>
        <View style={styles.headerCell}>
          <Text>Nombre</Text>
        </View>
        <View style={styles.headerCell}>
          <Text>ID</Text>
        </View>
        <View style={styles.headerCell}>
          <Text>Actualizar</Text>
        </View>
      </View>
      {filteredData.map((item) => (
        <View key={item.id} style={styles.row}>
          <View style={styles.cell}>
            <Text>{item.columna1}</Text>
          </View>
          <View style={styles.cell}>
            <Text>{item.columna2}</Text>
          </View>
          <View style={styles.cell}>
            <Button title="X" onPress={() => removeData(item.id)} />
            <Button title="Editar" onPress={() => removeData(item.id)} />
          </View>
        </View>
      ))}
        <TouchableOpacity
          style={styles.PButton}
          onPress={ () => {
            onPress={addData}
            navigation.navigate('RegistrarPaciente')}}
        >
          <Text style={styles.buttonText}>Registrar Paciente</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.backButton}
          onPress={ () => {
            navigation.navigate('Home')    
        }}
        >
          <Text style={styles.buttonText2}>Regresar</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  searchInput: {
    width: '80%',
    borderWidth: 1,
    padding: 8,
    marginBottom: 10,
    borderColor: '#DDE5F1',
    color: '#DDE5F1',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
    width: '80%',
  },
  headerCell: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#D1C6C6',
    padding: 10,
    textAlign: 'center',
    backgroundColor: 'white',
    width: '33.33%',
  },
  cell: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#D1C6C6',
    padding: 10,
    textAlign: 'center',
    width: '33.33%',
  },
  PButton: {
      backgroundColor: '#DDE5F1', // Color de fondo del botón
      padding: 12, // Espaciado interno del botón
      width: '80%',
      textAlign: 'center',
      marginTop: 20,
      marginBottom: 5,
    },
    buttonText: {
      color: '#015657', // Color del texto del botón
      fontSize: 14, // Tamaño de fuente del texto del botón
      fontFamily: 'Arial',
      textAlign: 'center',
    },
    buttonText2: {
      color: 'white', // Color del texto del botón
      fontSize: 14, // Tamaño de fuente del texto del botón
      fontFamily: 'Arial',
      textAlign: 'center',
    },
    backButton: {
      backgroundColor: '#015657', // Color de fondo del botón
      padding: 12, // Espaciado interno del botón
      width: '80%',
      textAlign: 'center',
      marginTop: 20,
      marginBottom: 5,
    },
});

export default TableApp;