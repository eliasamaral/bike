import React from 'react';
import { StyleSheet, Text, View, TextInput, } from 'react-native';
import { getStatusBarHeight } from "react-native-status-bar-height";


export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Encontre o Pedal ideal ou crie o seu próprio ritmo.</Text>
            <TextInput style={styles.input} placeholder={'Buscar Pedaladas'}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: getStatusBarHeight(true) + 50,
        paddingHorizontal: 20,
        marginBottom: 20
	},
    

    title: {
        marginBottom: 10,
        fontSize: 30,
        fontWeight: 'bold'
    },

    input: {
        backgroundColor: '#fff',
        height: 40,
        borderRadius: 5,
        paddingHorizontal: 10,
    }
});
