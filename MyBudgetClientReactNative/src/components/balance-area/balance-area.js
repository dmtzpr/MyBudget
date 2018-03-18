import React from 'react';
import PropTypes from 'prop-types';
import { Text, Image } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

import images from './images';
import styles from './styles';
import { centerStyle, borderStyle } from '../../styles/common-styles';

export default class BalanceArea extends React.PureComponent {
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
            <Grid style={[borderStyle, styles.grid, { backgroundColor: color }]}>
                <Row style={centerStyle}>
                    <Image style={styles.image} source={images[glyph]} />
                </Row>
                <Row style={centerStyle}>
                    <Text>{label}</Text>
                </Row>
                <Row style={centerStyle}>
                    <Text>{balance} $</Text>
                </Row>
            </Grid>
        );
    }
}
