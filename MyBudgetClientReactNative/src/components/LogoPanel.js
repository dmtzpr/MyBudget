import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

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

export default () => (
    <View style={styles.container}>
        <Image style={styles.logo} source={require('../images/budget.png')} />
    </View>
);
