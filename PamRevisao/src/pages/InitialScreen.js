import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import React from 'react';

import { StatusBar } from 'expo-status-bar';

export default function InitialScreen(){
    return(
        <View style={styles.container}>

            <View>
                <Image
                    source = {require('../assets/casual_dog.png')}
                    style={{width: '100%', height: '70%'}}
                /> 
            </View>

            <View style={{padding: 30}}>
                <Text style={styles.title}> Ótimo dia! </Text>
                <Text style={styles.subtitle}> Como deseja acessar? </Text>
            </View>

            <View>
                <TouchableOpacity style={styles.button}>
                    <Image
                        source={require('../assets/Google.png')}
                        style={styles.iconGoogle}
                    />
                    <Text> Como deseja acessar?  </Text>
                </TouchableOpacity>

                <TouchableOpacity>
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
        justifyContent: 'center',
        backgroundColor: 'green',
        width: '50%'
    },
    iconGoogle: {
        width: 20,
        height: 20
    }
})