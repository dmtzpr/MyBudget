import React from 'react';
import { Actions } from 'react-native-router-flux';
import { Row, Col, Grid } from 'react-native-easy-grid';

import NavigationMenu from '../navigation-menu/navigation-menu';
import LightButton from '../light-button/light-button';
import StatusBar from '../status-bar/status-bar';

import { centerStyle, wrapperStyle } from '../../styles/common-styles';

export default () => (
    <Grid style={wrapperStyle}>
        <StatusBar statusBarTitle='Settings' />
        <Row>
            <Col style={centerStyle}>
                <LightButton text='Logout' onPress={Actions.login} />
                <LightButton text='Go home' onPress={Actions.home} />
            </Col>
        </Row>
        <NavigationMenu />
    </Grid>
);
