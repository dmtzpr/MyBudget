import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, TouchableOpacity, ScrollView, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import LogoPanel from '../logo-panel/logo-panel';
import LightButton from '../light-button/light-button';
import LinkButton from '../link-button/link-button';
import FooterPanel from '../footer-panel/footer-panel';

import { wrapperStyle } from '../../styles/common-styles';
import styles from './styles';

export default class Login extends React.PureComponent {
    static propTypes = {
        isSignInFailed: PropTypes.bool.isRequired,
        loggingIn: PropTypes.bool.isRequired,
        onLogin: PropTypes.func.isRequired,
        onLogout: PropTypes.func.isRequired,
    };

    state = {
        username: '',
        password: '',
        submitted: false,
    };

    onFormControlChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    };

    onSignInButtonPress = () => {
        const { username, password } = this.state;

        this.setState({ submitted: true });

        if (username && password) {
            this.props.onLogin(username, password);
        }
    };

    render() {
        return (
            <View style={wrapperStyle}>
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
                                onChangeText={username => this.setState({ username })}
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
                                onChangeText={password => this.setState({ password })}
                                onSubmitEditing={this.onSignInButtonPress}
                            />
                            <LightButton text='Sign in' onPress={this.onSignInButtonPress} />
                            <LinkButton text='Register' onPress={Actions.register} />
                        </View>
                    </View>
                </ScrollView>
                <FooterPanel />
            </View>
        );
    }
}
