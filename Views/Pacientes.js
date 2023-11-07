import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../Styles/stylesviews';

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
  const [filteredData, setFilteredData] = useState([]);

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
  
  useEffect(()=>{
    const getInf = async()=>{
      try {
        const querySnapshot = await getDocs(collection(db, 'ProyectoDPS'))
        const docs = []
        querySnapshot.forEach((doc)=>{
          const {nombres, apellidos, fechaNacimiento, numResponsable, responsableFamiliar} = doc.data()
          docs.push({
            id:doc.id,
            nombres,
            apellidos,
            fechaNacimiento,
            numResponsable,
            responsableFamiliar
          })
        })
        setInf(docs);
      } catch (error) {
        console.log(error);
      }
    }
    getInf()
  }, [inf])

    const handleSearch = () => {
      const filtered = inf.filter((item) =>
        item.nombres.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredData(filtered);
    };

  // Seccion visual
  return (
    <View style={styles.containerP}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar..."
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <TouchableOpacity
          style={styles.PVButton}
          onPress={ () => {
            onPress={handleSearch}}} >
          <Text style={styles.buttonText}> Buscar </Text>
        </TouchableOpacity>
      
      <View style={styles.row}>
        <View style={styles.headerCell}>
          <Text style={styles.title}>Pacientes </Text>
          {inf.map((list)=>(
            <TouchableOpacity key={list.id} style={styles.BotonLista} 
            onPress={()=>navigation.navigate('UpdatePacientes',{pacientId:list.id})}>
              <Text style={styles.TextoNombre}>-{list.nombres}</Text>
            </TouchableOpacity>
            ))
            }
        </View>
      </View>

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