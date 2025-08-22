import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import React from 'react';

import { StatusBar } from 'react-native';


import { useNavigation } from '@react-navigation/native';


export default function InitialScreen(){
    const navigation = useNavigation()

    return(
        <View style={styles.container}>
            <StatusBar
                backgroundColor='#737e86'
            />
            <View>
                <Image
                    source = {require('../assets/casual_dog.png')}
                    style={{}}
                /> 
            </View>

            <View style={{padding: 30}}>
                <Text style={styles.title}> Ótimo dia! </Text>
                <Text style={styles.subtitle}> Como deseja acessar? </Text>
            </View>

            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button}
                    onPress = {() => navigation.navigate('Login')}
                >
                    <Image
                        source={require('../assets/Google.png')}
                        style={styles.iconGoogle}
                    />
                    <Text style={styles.buttonText}> Como deseja acessar?  </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.secondButton}
                
                >
                    <Text> Outras opções </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
     
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '500'
    },
    subtitle: {
        textAlign: 'center',
        fontWeight: '300'
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', // centraliza o texto
        backgroundColor: '#2cb859',
        width: '80%',
        height: 50,
        borderRadius: 10,
        margin: 20,
        position: 'relative',
    },
    secondButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: '80%',
        height: 50,
        borderRadius: 10,
        borderColor: '#2cb859',
        borderWidth: 1
    },
    iconGoogle: {
        width: 20,
        height: 20,
        backgroundColor: 'white',
        position: 'absolute',
        left: 20, // distância da borda esquerda
    },
    buttonText: {
        flex: 1,
        textAlign: 'center',
        color: 'white',
    },
    containerButton: {
        alignItems: 'center'
    }
})