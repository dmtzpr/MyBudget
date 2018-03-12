import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import FooterPanel from './components/FooterPanel';

const RouterWithRedux = connect()(Router);

export default class Routes extends Component {
    render() {
        return (
            <RouterWithRedux>
                <Stack key='root' hideNavBar={true}>
                    <Scene key='login' component={Login} title='Login' initial={true} />
                    <Scene key='register' component={Register} title='Register' />
                    <Scene key='home' component={Home} title='Home' />
                </Stack>
            </RouterWithRedux>
        );
    }
}
