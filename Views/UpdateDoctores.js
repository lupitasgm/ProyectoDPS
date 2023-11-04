import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const DocForm = ( { navigation } ) => {
  const [NombreDoctor, setNombreDoctor] = useState('');
  const [ApellidosDoctor, setApellidosDoctor] = useState('');
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
            this.props.navigation.navigate('Pacientes')}}
        >
          <Text style={styles.buttonText}>Actualizar datos</Text>
        </TouchableOpacity>
      
        <TouchableOpacity
          style={styles.backButton}
          onPress={ () => {
            navigation.navigate('Doctores')    
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

export default DocForm;