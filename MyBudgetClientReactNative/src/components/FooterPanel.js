import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class FooterPanel extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.footerText}>myBudget application</Text>
            </View>
        );
    }
}

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
