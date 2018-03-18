import React from 'react';
import { Actions } from 'react-native-router-flux';
import { TouchableOpacity, Text } from 'react-native';
import { Row, Col, Grid } from 'react-native-easy-grid';

import NavigationMenu from '../navigation-menu/navigation-menu';
import StatusBar from '../status-bar/status-bar';

import { centerStyle, wrapperStyle } from '../../styles/common-styles';
import styles from './styles';

export default () => (
    <Grid style={wrapperStyle}>
        <StatusBar statusBarTitle='Settings' />
        <Row>
            <Col style={centerStyle}>
                <TouchableOpacity style={styles.button} onPress={Actions.login}>
                    <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={Actions.home}>
                    <Text style={styles.buttonText}>Go home</Text>
                </TouchableOpacity>
            </Col>
        </Row>
        <NavigationMenu />
    </Grid>
);
