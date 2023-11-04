import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        nombre: '',
        apellido: '',
        username: '',
        password: '',
        password2: '',
    };
  }

  handleNameChange = (text) => {
    this.setState({ nombre: text });
  }

  handleLastNameChange = (text) => {
    this.setState({ apellido: text });
  }

  handleUsernameChange = (text) => {
    this.setState({ username: text });
  }

  handlePasswordChange = (text) => {
    this.setState({ password: text });
  }

  handlePassword2Change = (text) => {
    this.setState({ password2: text });
  }

  handleRegister = () => {
    const { nombre, apellido, username, password, password2 } = this.state;
    // Lógica de registro de usuario
  }

  render() {
    return (
      <View style={styles.container}>
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
        <Text style={styles.text}>Nombre de usuario</Text>
        <TextInput
          style={styles.input}
          onChangeText={this.handleUsernameChange}
          value={this.state.username}
        />
        <Text style={styles.text}>Contraseña</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          onChangeText={this.handlePasswordChange}
          value={this.state.password}
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
          onPress={this.handleRegister}
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

const styles = StyleSheet.create({
    logo: {
      height: '30%',
      width: 128,
    },
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
    loginButton: {
      backgroundColor: '#89C400', // Color de fondo del botón
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
      color: 'white', // Color del texto del botón
      fontSize: 14, // Tamaño de fuente del texto del botón
      fontFamily: 'Arial',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
  
export default RegisterScreen;