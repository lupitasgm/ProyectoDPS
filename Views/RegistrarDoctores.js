import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../Styles/stylesviews';

const Stack = createStackNavigator();

const DocSave = ( { navigation } ) => {
  const [NombreDoctor, setNombreDoctor] = useState('');
  const [ApellidosDoctor, setApellidosDoctor] = useState('');
  const [Especialidad, setEspecialidad] = useState('');
  const [NumDoctor, setNumDoctor] = useState('');
  const [CorreoDoctor, setCorreoDoctor] = useState('');

  const handleSave = () => {
    // implementar la lógica para guardar los datos del paciente
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nombres</Text>
      <TextInput
        style={styles.input}
        value={NombreDoctor}
        onChangeText={(text) => setNombreDoctor(text)}
      />
      <Text style={styles.text}>Apellidos</Text>
      <TextInput
        style={styles.input}
        value={ApellidosDoctor}
        onChangeText={(text) => setApellidosDoctor(text)}
      />
      <Text style={styles.text}>Especialidad</Text>
      <TextInput
        style={styles.input}
        value={Especialidad}
        onChangeText={(text) => setEspecialidad(text)}
      />
      <Text style={styles.text}>Núm. Teléfonico</Text>
      <TextInput
        style={styles.input}
        value={NumDoctor}
        onChangeText={(text) => setNumDoctor(text)}
      />
      <Text style={styles.text}>Correo Electrónico</Text>
      <TextInput
        style={styles.input}
        value={CorreoDoctor}
        onChangeText={(text) => setCorreoDoctor(text)}
      />

        <TouchableOpacity
          style={styles.PButton}
          onPress={ () => {
            this.handleLogin
            this.props.navigation.navigate('')}}
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