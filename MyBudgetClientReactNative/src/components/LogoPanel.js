import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, View } from 'react-native';

export default class LogoPanel extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../images/budget.png')} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 118,
        height: 118,
    },
});
