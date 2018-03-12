import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';

const styles = StyleSheet.create({
    headerGrid: {
        height: 60,
        backgroundColor: '#C2AB20',
    },

    headerColumn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    headerText: {
        color: '#333',
        fontSize: 19,
    },
});

export default class Header extends Component {
    static propTypes = {
        userName: PropTypes.string.isRequired,
        totalBalance: PropTypes.number.isRequired,
    };

    render() {
        const { userName, totalBalance } = this.props;

        return (
            <Grid style={styles.headerGrid}>
                <Col style={styles.headerColumn}>
                    <Text style={styles.headerText}>{userName}</Text>
                </Col>
                <Col style={styles.headerColumn}>
                    <Text style={styles.headerText}>Balance: {totalBalance} $</Text>
                </Col>
            </Grid>
        );
    }
}
