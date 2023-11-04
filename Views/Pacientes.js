import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const TableApp = () => {
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
      <Button title="Agregar Dato" onPress={addData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
});

export default TableApp;