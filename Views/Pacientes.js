import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../Styles/stylesviews';
 

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
    <View style={styles.containerP}>
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
          style={styles.PVButton}
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

export default TableApp;