import React, { Component } from 'react';
import { Image, ScrollView, Platform, StyleSheet, Text, View } from 'react-native';

import LogoPanel from './LogoPanel';
import FooterPanel from './FooterPanel';

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={[styles.content]}>
                        <LogoPanel />
                    </View>
                </ScrollView>

                <FooterPanel />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    content: {
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 50,
    },
});
