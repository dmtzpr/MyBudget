import React, { Component } from 'react';
import { TextInput, TouchableOpacity, ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

// import Button from 'react-native-button';

import FooterPanel from './FooterPanel';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#e7db63',
    },

    content: {
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 50,
    },

    title: {
        fontSize: 30,
    },

    signUpForm: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },

    inputBox: {
        width: 300,
        backgroundColor: '#fff',
        borderRadius: 6,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#333',
        borderWidth: 1,
        borderColor: '#ccc',
        marginVertical: 5,
    },

    signUpButton: {
        width: 300,
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderRadius: 6,
        marginVertical: 10,
        paddingVertical: 10,
    },

    signUpButtonText: {
        fontSize: 18,
        fontWeight: '400',
        color: '#333',
        textAlign: 'center',
    },

    cancelButton: {
        width: 300,
    },

    cancelButtonText: {
        color: '#337ab7',
        textAlign: 'right',
        paddingHorizontal: 10,
    },
});

export default class Register extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={[styles.content]}>
                        <Text style={styles.title}>Register form</Text>
                        <View style={styles.signUpForm}>
                            <Text>Username</Text>
                            <TextInput
                                style={[styles.inputBox]}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                returnKeyType='next'
                                autoCorrect={false}
                                autoCapitalize='none'
                            />
                            <Text>Password</Text>
                            <TextInput
                                style={[styles.inputBox]}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                returnKeyType='go'
                                secureTextEntry={true}
                                autoCorrect={false}
                                autoCapitalize='none'
                            />
                            <Text>Confirm Password</Text>
                            <TextInput
                                style={[styles.inputBox]}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                returnKeyType='go'
                                secureTextEntry={true}
                                autoCorrect={false}
                                autoCapitalize='none'
                            />
                            <TouchableOpacity style={styles.signUpButton} onPress={Actions.home}>
                                <Text style={styles.signUpButtonText}>Register</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.cancelButton}>
                                <Text style={styles.cancelButtonText} onPress={Actions.login}>
                                    Cancel
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
