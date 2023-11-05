import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import styles from '../Styles/styles';

import appFirebase from '../credenciales'
import {getFirestore} from 'firebase/firestore'
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useEffect } from 'react';

const db = getFirestore(appFirebase)
const auth = getAuth(appFirebase);

class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        nombre: null,
        apellido: null,
        email: null,
        password: null,
        password2: null,
    };
  }

  singUpUser = (email, password)=>{
    if (password.length < 6) {
      Alert.alert('La contraseña debe tener al menos 6 caracteres');
      return;
    }
  
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Usuario registrado exitosamente
        const user = userCredential.user;
        console.log('Usuario registrado:', user);
        Alert.alert('Usuario creado');
      })
      .catch((error) => {
        // Error durante el registro
        console.error('Error al registrar:', error);
        Alert.alert('Error al registrar: ' + error.message);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.containerimgr}>
          <Image
          source={require('./img/logo.png')}
          style={styles.logor} />
        </View>
          
        <Text style={styles.title}>Registro de Usuario</Text>
        <Text style={styles.text}>Nombre</Text>
        <TextInput
          style={styles.input}
          onChangeText={this.handleNameChange}
          value={this.state.nombre}
        />

        <Text style={styles.text}>Apellido</Text>
        <TextInput
          style={styles.input}
          onChangeText={this.handleLastNameChange}
          value={this.state.apellido}
        />

        <Text style={styles.text}>Correo</Text>
        <TextInput
          style={styles.input}
          onChangeText={ email => this.setState({email})}
        />

        <Text style={styles.text}>Contraseña</Text>
        <TextInput
          style={styles.input}
          onChangeText={ password => this.setState({password})}
        />

        <Text style={styles.text}>Confirme su contraseña</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          onChangeText={this.handlePassword2Change}
          value={this.state.password2}
        />

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => this.singUpUser(this.state.email, this.state.password)}
        >
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.backButton}
          onPress={ () => {
            this.props.navigation.navigate('Iniciosesion')   
        }}
        >
          <Text style={styles.buttonText}>Regresar</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

export default RegisterScreen;