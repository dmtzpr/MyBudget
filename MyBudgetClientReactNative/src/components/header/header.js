import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

import { centerStyle } from '../../styles/common-styles';
import styles from './styles';

export default class Header extends React.PureComponent {
    static propTypes = {
        userName: PropTypes.string.isRequired,
        totalBalance: PropTypes.number.isRequired,
    };

    render() {
        const { userName, totalBalance } = this.props;

        return (
            <Grid style={styles.headerGrid}>
                <Col style={centerStyle}>
                    <Row style={centerStyle}>
                        <Image source={require('../../images/user-icon.png')} />
                        <Text style={styles.headerText}>{userName}</Text>
                    </Row>
                </Col>
                <Col style={centerStyle}>
                    <Text style={styles.headerText}>Balance: {totalBalance} $</Text>
                </Col>
            </Grid>
        );
    }
}
