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

const DocForm = ( { route, navigation } ) => {
  
  const [doctor, setDoctor] = useState({})

  const getOneDoctor = async(id)=>{
    try{
      const docRef = doc(db, 'Doctores', id)
      const docSnap = await getDoc(docRef)
      setDoctor(docSnap.data())

    }catch(error){
      console.error(error)
    }
  }

  useEffect(()=>{
    getOneDoctor(route.params.docId)
  },[])

  const deleteDoctor = async(id)=>{ 
    await deleteDoc(doc(db,'Doctores', id))
    Alert.alert('Exito', 'Doctor eliminado con exito')
    navigation.navigate('Doctores')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textview}>Nombres: {doctor.nombres}</Text>
      <Text style={styles.textview}>Apellidos: {doctor.apellidos}</Text>
      <Text style={styles.textview}>Especialidad: {doctor.especialidad}</Text>
      <Text style={styles.textview}>Núm. Teléfonico: {doctor.numtelefono}</Text>
      <Text style={styles.textview}>Correo: {doctor.email}</Text>
        
        <TouchableOpacity
          style={styles.PButton}
          onPress={ () => {
            this.handleLogin
            this.props.navigation.navigate('')}}
        >
          <Text style={styles.buttonText}>Actualizar datos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.DeleteButton} onPress={()=>deleteDoctor(route.params.docId)}>
         <Text style={styles.buttonText2}>Eliminar Doctor</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.backButton2}
          onPress={ () => {
            navigation.navigate('Doctores')    
        }}
        >
          <Text style={styles.buttonText2}>Regresar</Text>
        </TouchableOpacity>
    </View>
  );
};


export default DocForm;