import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import Login from './src/components/Login';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Login />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E7DB63',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
});
