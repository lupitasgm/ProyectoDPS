import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../Styles/stylesviews';

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
      <Text style={styles.textview}>Nombres: {pacient.nombres}</Text>
      <Text style={styles.textview}>Apellidos: {pacient.apellidos}</Text>
      <Text style={styles.textview}>Fecha de nacimiento: {pacient.fechaNacimiento}</Text>
      <Text style={styles.textview}>Núm. Responsable: {pacient.NumResponsable}</Text>
      <Text style={styles.textview}>Responsable Familiar: {pacient.responsableFamuliar}</Text>
      <Text style={styles.textview}>Notas sobre el paciente:</Text>
        
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
          style={styles.backButton2}
          onPress={ () => {
            navigation.navigate('Pacientes')    
        }}
        >
          <Text style={styles.buttonText2}>Regresar</Text>
        </TouchableOpacity>
    </View>
  );
};

export default PatientForm;