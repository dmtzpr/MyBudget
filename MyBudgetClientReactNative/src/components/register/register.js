import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, ScrollView, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import FooterPanel from '../footer-panel/footer-panel';
import LightButton from '../light-button/light-button';
import LinkButton from '../link-button/link-button';

import { wrapperStyle } from '../../styles/common-styles';
import styles from './styles';

export default class Register extends React.PureComponent {
    static propTypes = {
        registering: PropTypes.bool.isRequired,
        onRegister: PropTypes.func.isRequired,
    };

    state = {
        username: '',
        password: '',
        confirmPassword: '',
        submitted: false,
    };

    onSignUpFormSubmit = () => {
        this.setState({ submitted: true });
        const { username, password, confirmPassword } = this.state;
        const { onRegister } = this.props;
        if (username && password && password === confirmPassword) {
            onRegister({
                username,
                password,
            });
        }
    };

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
                                onChangeText={username => this.setState({ username })}
                            />
                            <Text>Password</Text>
                            <TextInput
                                style={[styles.inputBox]}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                returnKeyType='next'
                                secureTextEntry={true}
                                autoCorrect={false}
                                autoCapitalize='none'
                                onChangeText={password => this.setState({ password })}
                            />
                            <Text>Confirm Password</Text>
                            <TextInput
                                style={[styles.inputBox]}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                returnKeyType='go'
                                secureTextEntry={true}
                                autoCorrect={false}
                                autoCapitalize='none'
                                onChangeText={confirmPassword => this.setState({ confirmPassword })}
                            />
                            <LightButton text='Register' onPress={this.onSignUpFormSubmit} />
                            <LinkButton text='Cancel' onPress={Actions.pop} />
                        </View>
                    </View>
                </ScrollView>
                <FooterPanel />
            </View>
        );
    }
}
