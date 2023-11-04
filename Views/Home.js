import React, { Component } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Image} from 'react-native';

class Home extends Component{
  constructor(props) {
    super(props);
  
    this.state = {
      Email: null,
      Password: null,
      Phone: null,
      uri: null,
    };
  }

  render ( ) {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={ () => { {this.navigateToLogin}
            this.props.navigation.navigate('Pacientes') } }
        >
          <Text style={styles.menuItemText}>Pacientes</Text>
        </TouchableOpacity>
  
        <TouchableOpacity
          style={styles.menuButton}
          onPress={ () => { {this.navigateToLogin}
            this.props.navigation.navigate('Doctores') } }
        >
          <Text style={styles.menuItemText}>Doctores</Text>
        </TouchableOpacity>
  
        <TouchableOpacity
          style={styles.menuButton}
          onPress={this.navigateToLogin}
        >
          <Text style={styles.menuItemText}>Citas</Text>
        </TouchableOpacity>
  
        <TouchableOpacity
          style={styles.menuButton}
          onPress={this.navigateToLogin}
        >
          <Text style={styles.menuItemText}>Agenda</Text>
        </TouchableOpacity>
        
      </View>
    );
  };
}

const styles = StyleSheet.create({
  logo: {
    height: '30%',
    width: 128,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    textAlign: 'center',
    width:'100%',
    paddingLeft: 10,
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
  menuButton: {
    backgroundColor: '#DDE5F1', // Color de fondo del botón
    padding: 18, // Espaciado interno del botón
    width: '90%',
    textAlign: 'center',
    margin: 12,
    alignItems: 'center',
    
  },
  buttonText: {
    color: '#015657', // Color del texto del botón
    fontSize: 14, // Tamaño de fuente del texto del botón
    fontFamily: 'Arial',
    fontWeight: 'bold',
    textAlign: 'center',
    width: '90%',
  },
});

export default Home;