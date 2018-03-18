import React from 'react';
import { TextInput, TouchableOpacity, ScrollView, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import FooterPanel from '../footer-panel/footer-panel';

import { wrapperStyle } from '../../styles/common-styles';
import styles from './styles';

export default class Register extends React.PureComponent {
    render() {
        return (
            <View style={wrapperStyle}>
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
                <FooterPanel />
            </View>
        );
    }
}
