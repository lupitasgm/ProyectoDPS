import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

// Inicio declaracion Firebase
import appFirebase from '../credenciales'
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc} from 'firebase/firestore'
import { useEffect } from 'react';

const db = getFirestore(appFirebase)

// Fin declaracion Firebase

const Stack = createStackNavigator();

const PatientForm = ( { route, navigation } ) => {


  // const [NombrePaciente, setNombrePaciente] = useState('');
  // const [ApellidosPaciente, setApellidosPaciente] = useState('');
  // const [EdadPaciente, setEdadPaciente] = useState('');
  // const [NumResponsable, setNumResponsable] = useState('');
  // const [ResponsablePaciente, setResponsablePaciente] = useState('');
  // const [patientInfo, setPatientInfo] = useState('');

  //const handleSave = () => {
    // implementar la lógica para guardar los datos 
  // };

  const [pacient, setPacient] = useState({})

  const getOnePacient = async(id)=>{
    try{
      const docRef = doc(db, 'ProyectoDPS', id)
      const docSnap = await getDoc(docRef)
      setPacient(docSnap.data())

    }catch(error){
      console.error(error)
    }
  }

  useEffect(()=>{
    getOnePacient(route.params.pacientId)
  },[])

  const deletePacient = async(id)=>{ 
    await deleteDoc(doc(db,'ProyectoDPS', id))
    Alert.alert('Exito', 'Paciente eliminado con exito')
    navigation.navigate('Pacientes')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nombres: {pacient.nombres}</Text>
      <Text style={styles.text}>Apellidos: {pacient.apellidos}</Text>
      <Text style={styles.text}>Fecha de nacimiento: {pacient.fechaNacimiento}</Text>
      <Text style={styles.text}>Núm. Responsable: {pacient.NumResponsable}</Text>
      <Text style={styles.text}>Responsable Familiar: {pacient.responsableFamuliar}</Text>
      <Text style={styles.text}>Notas sobre el paciente:</Text>
        
        <TouchableOpacity
          style={styles.PButton}
          onPress={ () => {
            this.handleLogin
            this.props.navigation.navigate('')}}
        >
          <Text style={styles.buttonText}>Actualizar datos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.DeleteButton} onPress={()=>deletePacient(route.params.pacientId)}>
         <Text style={styles.buttonText2}>Eliminar Paciente</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.backButton}
          onPress={ () => {
            navigation.navigate('Pacientes')    
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
      backgroundColor: 'white',
      minWidth: '60%',
      padding: 30,
    },
    title: {
      textAlign: 'center',
      fontSize: 24,
      marginBottom: 20,
      color: '#015657',
      fontWeight: 'bold',
    },
    text: {
      fontSize: 16,
      color: '#015657',
    },
    input: {
      width: '100%',
      height: 40,
      borderColor: '#D1C6C6',
      backgroundColor:'#D1C6C6',
      borderWidth: 1,
      marginBottom: 10,
      paddingLeft: 10,
    },
    PButton: {
      backgroundColor: '#DDE5F1', // Color de fondo del botón
      padding: 12, // Espaciado interno del botón
      width: '100%',
      textAlign: 'center',
      marginTop: 20,
      marginBottom: 5,
    },
    DeleteButton: {
      backgroundColor: '#c00000', // Color de fondo del botón
      padding: 12, // Espaciado interno del botón
      width: '100%',
      textAlign: 'center',
      marginTop: 20,
      marginBottom: 5,
    },
    backButton: {
      backgroundColor: '#015657', // Color de fondo del botón
      padding: 12, // Espaciado interno del botón
      width: '100%',
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
  });

export default PatientForm;