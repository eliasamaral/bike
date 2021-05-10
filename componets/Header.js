import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.icons}>
                <MaterialIcons name="search" size={25} color="black" onPress={() => alert('Em desenvolvimento')} />
                <MaterialIcons name="add" size={25} color="black" onPress={() => alert('Em desenvolvimento')} />
            </View>

            <View style={styles.local}>
                <MaterialIcons name="location-pin" size={25} color="black" />
                <Text style={styles.text} onPress={() => alert('Em desenvolvimento')}>Guriri</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 20,
    },

    icons: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        width: 100,
    },

    local: {
        paddingRight: 0,
        flexDirection: 'row',
        width: 100,
        justifyContent: 'flex-start'
    },

    text: {
        fontSize: 17,
        marginLeft: 5,
    },
});
