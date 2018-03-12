import React, { Component } from 'react';
import { TextInput, TouchableOpacity, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import LogoPanel from './LogoPanel';
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

    signInForm: {
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
    },

    emptyTopBorderRadius: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
    },

    emptyBottomBorderRadius: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },

    signInButton: {
        width: 300,
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderRadius: 6,
        marginVertical: 10,
        paddingVertical: 10,
    },
    signInButtonText: {
        fontSize: 18,
        fontWeight: '400',
        color: '#333',
        textAlign: 'center',
    },
    signUpButton: {
        width: 300,
    },

    signUpButtonText: {
        color: '#337ab7',
        textAlign: 'right',
        paddingHorizontal: 10,
    },
});

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={[styles.content]}>
                        <LogoPanel />
                        <View style={styles.signInForm}>
                            <TextInput
                                style={[styles.inputBox, styles.emptyBottomBorderRadius]}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                placeholder='Username'
                                returnKeyType='next'
                                placeholderTextColor='#999'
                                autoCorrect={false}
                                autoCapitalize='none'
                                onSubmitEditing={() => this.passwordInput.focus()}
                            />
                            <TextInput
                                style={[styles.inputBox, styles.emptyTopBorderRadius]}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                placeholder='Password'
                                returnKeyType='go'
                                secureTextEntry={true}
                                placeholderTextColor='#999'
                                autoCorrect={false}
                                autoCapitalize='none'
                                ref={input => (this.passwordInput = input)}
                            />
                            <TouchableOpacity style={styles.signInButton}>
                                <Text style={styles.signInButtonText}>Sign in</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.signUpButton}>
                                <Text onPress={() => Actions.register()} style={styles.signUpButtonText}>
                                    Register
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
