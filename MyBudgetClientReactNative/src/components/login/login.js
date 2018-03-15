import React, { Component } from 'react';
import { TextInput, TouchableOpacity, ScrollView, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import LogoPanel from '../LogoPanel';
import FooterPanel from '../FooterPanel';

import styles from './styles';

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
                <FooterPanel />
            </View>
        );
    }
}
