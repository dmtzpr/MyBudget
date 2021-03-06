import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Platform, ActivityIndicator, View, StatusBar } from 'react-native';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Login from '../../containers/login';
import Register from '../../containers/register';
import Home from '../../containers/home';
import Cash from '../../containers/cash';
import Budget from '../../containers/budget';
import Settings from '../settings/settings';

import { wrapperStyle } from '../../styles/common-styles';

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
                <StatusBar backgroundColor='#e7db63' barStyle='light-content' />
                {isLoading ? (
                    <ActivityIndicator size={Platform.OS === 'ios' ? 'large' : 50} color='rgba(0, 0, 0, 0.3)' />
                ) : (
                    <RouterWithRedux>
                        <Stack key='root' hideNavBar={true} statusBarStyle='light-content'>
                            <Scene key='login' component={Login} title='Login' initial={true} />
                            <Scene key='register' component={Register} title='Register' />
                            <Scene key='home' component={Home} title='Home' />
                            <Scene key='cash' component={Cash} title='Cash' />
                            <Scene key='budget' component={Budget} title='Budget' />
                            <Scene key='settings' component={Settings} title='settings' />
                        </Stack>
                    </RouterWithRedux>
                )}
            </View>
        );
    }
}
