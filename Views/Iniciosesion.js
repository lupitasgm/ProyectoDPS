import React, { Component } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Image} from 'react-native';
import styles from '../Styles/styles';

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
        
        <Image
        source={require('./img/logo.png')}
        style={styles.logo} />
        
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
export default LoginScreen;