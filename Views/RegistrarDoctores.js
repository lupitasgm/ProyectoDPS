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
    nombres:'',
    apellidos:'',
    especialidad:'',
    numtelefono: '',
    email: ''
  }
  
  const [state, setState] = useState(initialState)
  
  const handleChangeText = (value, name)=>{
    setState({...state, [name]:value})
  }

  const saveDoc = async()=>{
    //console.log(state)
    try{
        await addDoc(collection(db, 'Doctores'),{
            ...state
        })
        
        Alert.alert('Datos guardados', 'Registro de doctor completado')
        navigation.navigate('Doctores')

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
      <Text style={styles.text}>Especialidad</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value)=>handleChangeText(value, 'especialidad')} value={state.especialidad}
      />
      <Text style={styles.text}>Núm. Teléfonico</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value)=>handleChangeText(value, 'numtelefono')} value={state.numtelefono}
      />
      <Text style={styles.text}>Correo Electrónico</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value)=>handleChangeText(value, 'email')} value={state.email}
      />

        <TouchableOpacity
          style={styles.PButton}
          onPress={saveDoc}
        >
          <Text style={styles.buttonText}>Registrar Doctor</Text>
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

export default DocSave;