import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from '../Styles/styles';

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
  
export default RegisterScreen;