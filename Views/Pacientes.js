import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../Styles/stylesviews';
// Inicio declaracion Firebase
import appFirebase from '../credenciales'
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc} from 'firebase/firestore'
import { useEffect } from 'react';
 

const Stack = createStackNavigator();
const db = getFirestore(appFirebase)
// Fin declaracion Firebase

const TableApp = ( { navigation } ) => {
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState([]);

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
        const getLista = async()=>{
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
                setData(docs);
            } catch (error) {
                console.log(error);
            }
        }
        getLista()
    }, [data])

  // Seccion visual
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
          {data.map((list)=>(
            <TouchableOpacity key={list.id} style={styles.BotonLista} 
            onPress={()=>navigation.navigate('UpdatePacientes',{productoId:list.id})}>
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