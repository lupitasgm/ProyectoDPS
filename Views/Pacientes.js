import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
 
// Inicio declaracion Firebase
import appFirebase from '../credenciales'
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc} from 'firebase/firestore'
import { useEffect } from 'react';

const db = getFirestore(appFirebase)

// Fin declaracion Firebase

const Stack = createStackNavigator();

const TableApp = ( { props, navigation } ) => {
  const [searchText, setSearchText] = useState('');
  const [inf, setInf] = useState([]);

  // const filteredData = data.filter((item) => {
  //   return (
  //     item.columna1.toLowerCase().includes(searchText.toLowerCase()) ||
  //     item.columna2.toLowerCase().includes(searchText.toLowerCase()) ||
  //     item.columna3.toLowerCase().includes(searchText.toLowerCase())
  //   );
  //});

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


  // const [lista, setLista] = useState([])

    useEffect(()=>{
        const getInf = async()=>{
            try {
                const querySnapshot = await getDocs(collection(db, 'ProyectoDPS'))
                const docs = []
                querySnapshot.forEach((doc)=>{
                    const {nombres, apellidos, fechaNacimiento, numResponsable, responsableFamuliar} = doc.data()
                    docs.push({
                        id:doc.id,
                        nombres,
                        apellidos,
                        fechaNacimiento,
                        numResponsable,
                        responsableFamuliar
                    })
                })
                setInf(docs);
            } catch (error) {
                console.log(error);
            }
        }
        getInf()
    }, [inf])

  // Seccion visual
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
          {inf.map((list)=>(
            <TouchableOpacity key={list.id} style={styles.PButton} 
            onPress={()=>navigation.navigate('UpdatePacientes',{pacientId:list.id})}>
              <Text style={styles.TextoNombre}>-{list.nombres}</Text>
            </TouchableOpacity>
            ))
            }
        </View>
        {/* <View style={styles.headerCell}>
          <Text>ID</Text>
        </View>
        <View style={styles.headerCell}>
          <Text>Actualizar</Text>
        </View> */}
      </View>
      {/* {filteredData.map((item) => (
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
      ))} */}
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