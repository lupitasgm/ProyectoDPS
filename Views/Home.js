import React, { Component } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Image} from 'react-native';
import styles from '../Styles/styles';

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
        
        <Image
        source={require('./img/logo.png')}
        style={styles.logo} />

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

export default Home;