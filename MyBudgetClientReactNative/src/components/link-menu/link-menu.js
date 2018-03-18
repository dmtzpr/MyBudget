import React from 'react';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { Text, Image } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

import { centerStyle, borderStyle } from '../../styles/common-styles';
import images from './images';
import styles from './styles';

export default class LinkMenu extends React.PureComponent {
    static propTypes = {
        glyph: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
        link: PropTypes.string.isRequired,
    };

    render() {
        const {
            glyph, label, balance, link,
        } = this.props;

        return (
            <Grid style={[borderStyle, styles.grid]}>
                <Row onPress={Actions[link]}>
                    <Col style={centerStyle}>
                        <Image style={styles.entityIcon} source={images[glyph]} />
                    </Col>
                    <Col size={2}>
                        <Row style={centerStyle}>
                            <Text style={styles.label}>{label}</Text>
                        </Row>
                        <Row style={centerStyle}>
                            <Text style={styles.label}>{balance} $</Text>
                        </Row>
                    </Col>
                    <Col style={centerStyle}>
                        <Image style={styles.chevronIcon} source={require('../../images/right-chevron-icon.png')} />
                    </Col>
                </Row>
            </Grid>
        );
    }
}
