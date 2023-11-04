import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../Styles/stylesviews';

const Stack = createStackNavigator();

const PatientForm = ( { navigation } ) => {
  const [NombrePaciente, setNombrePaciente] = useState('');
  const [ApellidosPaciente, setApellidosPaciente] = useState('');
  const [EdadPaciente, setEdadPaciente] = useState('');
  const [NumResponsable, setNumResponsable] = useState('');
  const [ResponsablePaciente, setResponsablePaciente] = useState('');
  const [patientInfo, setPatientInfo] = useState('');

  const handleSave = () => {
    // implementar la lógica para guardar los datos 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nombres</Text>
      <TextInput
        style={styles.input}
        value={NombrePaciente}
        onChangeText={(text) => setNombrePaciente(text)}
      />
      <Text style={styles.text}>Apellidos</Text>
      <TextInput
        style={styles.input}
        value={ApellidosPaciente}
        onChangeText={(text) => setApellidosPaciente(text)}
      />
      <Text style={styles.text}>Edad</Text>
      <TextInput
        style={styles.input}
        value={EdadPaciente}
        onChangeText={(text) => setEdadPaciente(text)}
      />
      <Text style={styles.text}>Núm. Responsable</Text>
      <TextInput
        style={styles.input}
        value={NumResponsable}
        onChangeText={(text) => setNumResponsable(text)}
      />
      <Text style={styles.text}>Responsable Familiar:</Text>
      <TextInput
        style={styles.input}
        value={ResponsablePaciente}
        onChangeText={(text) => setResponsablePaciente(text)}
      />
      <Text style={styles.text}>Notas sobre el paciente:</Text>
      <TextInput
        style={styles.input}
        value={patientInfo}
        onChangeText={(text) => setPatientInfo(text)}
      />
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