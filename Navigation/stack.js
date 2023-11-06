import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './stackRoutes';
import { Header } from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
        <Stack.Navigator>

            <Stack.Screen 
                name="Iniciosesion" 
                component={Routes.Iniciosesion} 
                options={ { 
                    headerShown: false, 
                } } 
            />  

            <Stack.Screen 
                name="Home" 
                component={Routes.Home} 
                options={ { 
                    headerShown: false, } }
            />

            <Stack.Screen 
                name="Registro" 
                component={Routes.Registro} 
                options={ { 
                    headerShown: false,
                    } }
            />  
            
            <Stack.Screen 
                name="Pacientes" 
                component={Routes.Pacientes} 
                options={ { 
                } } 
            />

            <Stack.Screen 
                name="UpdatePacientes" 
                component={Routes.UpdatePacientes} 
                options={ {  
                    title : 'UpdatePacientes',
                    headerShown: false,
                } } 
            /> 
            
            <Stack.Screen 
                name="RegistrarPaciente" 
                component={Routes.RegistrarPacientes} 
                options={ { 
                } }
            />

            <Stack.Screen 
                name="Doctores" 
                component={Routes.Doctores} 
                options={ { 
                } } 
            />

            <Stack.Screen 
                name="UpdateDoctores" 
                component={Routes.UpdateDoctores} 
                options={ {  
                    title : 'Doctores',
                } } 
            /> 
            
            <Stack.Screen 
                name="RegistrarDoctores" 
                component={Routes.RegistrarDoctores} 
                options={ { 
                    title : 'Doctores',
                } }
            />
            
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;