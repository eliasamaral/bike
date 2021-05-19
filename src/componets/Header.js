import React from 'react';
import { StyleSheet, Text, View,  } from 'react-native';

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>PEDALADAS</Text>
            <Text style={styles.subtitle}>Lista</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        
    },

    title: {

    },

    subtitle: {

    },

});
