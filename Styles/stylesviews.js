import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    containerP: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },

    container: {
        flex: 1,
        backgroundColor: 'white',
        minWidth: '60%',
        padding: 30,
    },
    
    searchInput: {
        width: '80%',
        borderWidth: 1,
        padding: 8,
        marginBottom: 10,
        borderColor: '#DDE5F1',
        color: '#DDE5F1',
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

    row: {
        flexDirection: 'row',
        marginBottom: 5,
        width: '80%',
    },

    headerCell: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#D1C6C6',
        padding: 10,
        textAlign: 'center',
        backgroundColor: 'white',
        width: '33.33%',
    },

    cell: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#D1C6C6',
        padding: 10,
        textAlign: 'center',
        width: '33.33%',
    },

    PVButton: {
        backgroundColor: '#DDE5F1', // Color de fondo del botón
        padding: 12, // Espaciado interno del botón
        width: '80%',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 5,
    },

    PButton: {
        backgroundColor: '#DDE5F1', // Color de fondo del botón
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

    backButton: {
        backgroundColor: '#015657', // Color de fondo del botón
        padding: 12, // Espaciado interno del botón
        width: '80%',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 5,
    },

    backButton2: {
        backgroundColor: '#015657', // Color de fondo del botón
        padding: 12, // Espaciado interno del botón
        width: '100%',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 5,
    },
    
});
export default styles;