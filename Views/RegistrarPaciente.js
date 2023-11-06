import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../Styles/stylesviews';

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
    responsableFamiliar: ''
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
        //
        Alert.alert('Datos guardados', 'Registro de paciente completado')
        navigation.navigate('Pacientes')

    }catch(error){
        console.error(error)
    }
}
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
        onChangeText={(value)=>handleChangeText(value, 'responsableFamiliar')} value={state.responsableFamiliar}
      />
        <TouchableOpacity
          style={styles.PButton}
          onPress={savePacient}
        >
          <Text style={styles.buttonText}>Registrar Paciente</Text>
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

export default PatientSave;