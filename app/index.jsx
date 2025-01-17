import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { Link } from 'expo-router';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
    box: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
    },
    textoT: {
        color: 'white',
        fontSize: 30,
    },
    texto: {
        color: 'white',
    },
});

export default function Home() {
    return (
        <View style={styles.container}>
            <Link href="./Memories">
                <Text style={styles.texto}>Memories</Text>
            </Link>
        </View>
    );
}