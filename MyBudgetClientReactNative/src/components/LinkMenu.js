import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

const styles = StyleSheet.create({
    headerGrid: {
        height: 60,
        backgroundColor: 'rgba(86, 61, 124, 0.15)',
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

export default class LinkMenu extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        glyph: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
        link: PropTypes.string.isRequired,
    };

    render() {
        const {
            name, glyph, label, balance, link,
        } = this.props;

        return (
            <Grid style={styles.headerGrid}>
                <Row>
                    <Col style={styles.column} />
                </Row>
            </Grid>
        );
    }
}
