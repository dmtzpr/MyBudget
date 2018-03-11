import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

import Routes from './src/Routes';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E7DB63',
    },
});

export default () => (
    <View style={styles.container}>
        <StatusBar backgroundColor='#e7db63' barStyle='light-content' />
        <Routes />
    </View>
);
