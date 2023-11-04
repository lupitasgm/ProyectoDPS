import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

// Inicio declaracion Firebase
import appFirebase from '../credenciales'
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc} from 'firebase/firestore'

const db = getFirestore(appFirebase)

// Fin declaracion Firebase

const Stack = createStackNavigator();

const PatientSave = ( { navigation } ) => {

  const initialState = {
    nombres:'',
    apellidos:'',
    fechaNacimiento:'',
    numResponsable: '',
    responsableFamuliar: ''
}

const [state, setState] = useState(initialState)

const handleChangeText = (value, name)=>{
    setState({...state, [name]:value})
}

const savePacient = async()=>{
    //console.log(state)
    try{
        await addDoc(collection(db, 'ProyectoDPS'),{
            ...state
        })

        Alert.alert('Alerta', 'Guardado con éxito')
        //props.navigation.navigate('List');

    }catch(error){
        console.error(error)
    }
}

  // const [NombrePaciente, setNombrePaciente] = useState('');
  // const [ApellidosPaciente, setApellidosPaciente] = useState('');
  // const [FechanPaciente, setFechanPaciente] = useState('');
  // const [NumResponsable, setNumResponsable] = useState('');
  // const [ResponsablePaciente, setResponsablePaciente] = useState('');

  // const handleSave = () => {
  //   // implementar la lógica para guardar los datos del paciente
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nombres</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value)=>handleChangeText(value, 'nombres')} value={state.nombres}
      />
      <Text style={styles.text}>Apellidos</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value)=>handleChangeText(value, 'apellidos')} value={state.apellidos}
      />
      <Text style={styles.text}>Fecha de nacimiento</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value)=>handleChangeText(value, 'fechaNacimiento')} value={state.fechaNacimiento}
      />
      <Text style={styles.text}>Núm. Responsable</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value)=>handleChangeText(value, 'numResponsable')} value={state.numResponsable}
      />
      <Text style={styles.text}>Responsable Familiar:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value)=>handleChangeText(value, 'responsableFamiliar')} value={state.responsableFamuliar}
      />
        <TouchableOpacity
          style={styles.PButton}
          onPress={savePacient}
        >
          <Text style={styles.buttonText}>Registrar Paciente</Text>
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

export default PatientSave;