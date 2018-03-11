import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 50,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#413B17',
    },
    footerText: {
        color: '#fff',
        textAlign: 'center',
        paddingTop: 15,
    },
});

export default () => (
    <View style={styles.container}>
        <Text style={styles.footerText}>myBudget application</Text>
    </View>
);
