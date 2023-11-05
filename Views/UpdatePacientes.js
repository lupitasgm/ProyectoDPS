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

const PatientForm = ( { navigation } ) => {


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
        }
        catch(error){
          console.log(error);
        }
      }

    useEffect(()=>{
        getOnePacient(this.props.route.params.productoId)
      },[])

    const deletePacient = async(id)=>{ 
        await deleteDoc(doc(db,'ProyectoDPS', id))
        Alert.alert('Exito', 'Paciente eliminado con exito')
        props.navigation.navigate('List')
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

export default PatientForm;