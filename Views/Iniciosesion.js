import React, { Component } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Image} from 'react-native';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleUsernameChange = (text) => {
    this.setState({ username: text });
  }

  handlePasswordChange = (text) => {
    this.setState({ password: text });
  }

  handleLogin = () => {
    const { username, password } = this.state;
    // Lógica de autenticación
  }

  render() {
    return (
      <View style={styles.container}>
        
        <Text style={styles.title}>Inicio de Sesión</Text>
        <Text style={styles.text}> Nombre de usuario </Text>
        <TextInput
          style={styles.input}
          onChangeText={this.handleUsernameChange}
          value={this.state.username}
        />
        <Text style={styles.text} > Contraseña </Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          onChangeText={this.handlePasswordChange}
          value={this.state.password}
        />
        <TouchableOpacity
          style={styles.loginButton}
          onPress={ () => {
            this.handleLogin
            this.props.navigation.navigate('Home')}}
        >
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>

        <Text style={styles.text2}>¿No tienes una cuenta?</Text>
        <TouchableOpacity onPress={ () => { this.props.navigation.navigate('Registro') } } >
        <Text style={styles.textlink}>Registrarse</Text>
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
  text2: {
    fontSize: 16,
    color: '#015657',
    textAlign: 'center',
  },
  textlink: {
    fontSize: 16,
    color: '#89C400',
    textAlign:'center',
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
    marginBottom: 10,
  },
  buttonText: {
    color: 'white', // Color del texto del botón
    fontSize: 14, // Tamaño de fuente del texto del botón
    fontFamily: 'Arial',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LoginScreen;