import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../Styles/stylesviews';

// Inicio declaracion Firebase
import appFirebase from '../credenciales'
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc} from 'firebase/firestore'
import { useEffect } from 'react';

const db = getFirestore(appFirebase)

// Fin declaracion Firebase

const Stack = createStackNavigator();

const DocView = ( { navigation } ) => {
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
        const querySnapshot = await getDocs(collection(db, 'Cita'))
        const docs = []
        querySnapshot.forEach((doc)=>{
          const {Paciente, Doctor, Fecha, Hora, Motivo} = doc.data()
          docs.push({
            id:doc.id,
            Paciente,
            Doctor,
            Fecha,
            Hora,
            Motivo
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
    <View style={styles.containerP}>
      

      <View style={styles.row}>
        <View style={styles.headerCell}>
          <Text style={styles.title}>Agenda</Text>
          {inf.map((list)=>(
            <TouchableOpacity key={list.id} style={styles.BotonLista}>
              <Text style={styles.TextoNombre}>-{list.Paciente}</Text>
              <Text style={styles.TextoNombre}>-{list.Doctor}</Text>
              <Text style={styles.TextoNombre}>-{list.Fecha}</Text>
              <Text style={styles.TextoNombre}>-{list.Hora}</Text>
            </TouchableOpacity>
            ))
            }
        </View>
      </View>

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

export default DocView;