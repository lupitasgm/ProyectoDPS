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

const DocSave = ( { navigation } ) => {

  const initialState = {
    Paciente:'',
    Doctor:'',
    Fecha:'',
    Hora:'',
    Motivo: ''
  }
  
  const [state, setState] = useState(initialState)

  
  const handleChangeText = (value, name)=>{
    setState({...state, [name]:value})
  }

  const saveDoc = async()=>{
    //console.log(state)
    try{
        await addDoc(collection(db, 'Citas'),{
            ...state
        })
        
        Alert.alert('Datos guardados', 'Registro de cita completado')
        navigation.navigate('Citas')

    }catch(error){
        console.error.toString()
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nombre Paciente</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value)=>handleChangeText(value, 'Paciente')} value={state.Paciente}
      />
      <Text style={styles.text}>Doctor</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value)=>handleChangeText(value, 'Doctor')} value={state.Doctor}
      />
      <Text style={styles.text}>Fecha</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value)=>handleChangeText(value, 'Fecha')} value={state.Fecha}
      />
      
      <Text style={styles.text}>Hora</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value)=>handleChangeText(value, 'Hora')} value={state.Hora}
      />

      <Text style={styles.text}>Motivo</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value)=>handleChangeText(value, 'Motivo')} value={state.Motivo}
      />

        <TouchableOpacity
          style={styles.PButton}
          onPress={saveDoc}
        >
          <Text style={styles.buttonText}>Registrar Cita</Text>
        </TouchableOpacity>
      
        <TouchableOpacity
          style={styles.backButton2}
          onPress={ () => {
            navigation.navigate('Home')    
        }}
        >
          <Text style={styles.buttonText2}>Regresar</Text>
        </TouchableOpacity>
    </View>
  );
};

export default DocSave;