import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

const styles = StyleSheet.create({
    grid: {
        height: 100,
        backgroundColor: 'rgba(86, 61, 124, 0.15)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    column: {
        borderWidth: 1,
        borderColor: 'rgba(86, 61, 124, 0.2)',
    },

    headerText: {
        color: '#333',
        fontSize: 19,
    },
});

export default class BalanceArea extends Component {
    static propTypes = {
        color: PropTypes.string.isRequired,
        glyph: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
    };

    render() {
        const {
            color, glyph, label, balance,
        } = this.props;

        return (
            <Grid style={[styles.grid, { backgroundColor: color }]}>
                <Row>
                    <Text>{glyph}</Text>
                </Row>
                <Row>
                    <Text>{label}</Text>
                </Row>
                <Row>
                    <Text>{balance} $</Text>
                </Row>
            </Grid>
        );
    }
}
