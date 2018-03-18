import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Platform, ActivityIndicator, View } from 'react-native';
import { Router, Stack, Scene, Actions } from 'react-native-router-flux';

import Login from '../../containers/login';
import Register from '../register/register';
import Home from '../../containers/home';

import { wrapperStyle } from '../../styles/common-styles';
import Settings from '../settings/settings';

const RouterWithRedux = connect()(Router);

export default class Routes extends React.PureComponent {
    static propTypes = {
        onAppLoad: PropTypes.func.isRequired,
        isLoading: PropTypes.bool.isRequired,
        isLoggedIn: PropTypes.bool.isRequired,
    };

    componentWillMount() {
        this.props.onAppLoad();
    }

    componentWillReceiveProps(nextProps) {
        const { isLoggedIn, onAppLoad } = this.props;

        if (!isLoggedIn && nextProps.isLoggedIn) {
            onAppLoad();
        }
    }

    render() {
        const { isLoading } = this.props;

        return (
            <View style={wrapperStyle}>
                {isLoading ? (
                    <ActivityIndicator size={Platform.OS === 'ios' ? 'large' : 50} color='rgba(0, 0, 0, 0.3)' />
                ) : (
                    <RouterWithRedux>
                        <Stack key='root' hideNavBar={true} statusBarStyle='light-content'>
                            <Scene key='home' component={Home} title='Home' />
                            <Scene key='settings' component={Settings} title='settings' />
                            <Scene key='login' component={Login} title='Login' initial={true} />
                            <Scene key='register' component={Register} title='Register' />
                        </Stack>
                    </RouterWithRedux>
                )}
            </View>
        );
    }
}
