import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

import { centerStyle, headerStyle, headerTextStyle } from '../../styles/common-styles';

export default class Header extends React.PureComponent {
    static propTypes = {
        userName: PropTypes.string.isRequired,
        totalBalance: PropTypes.number.isRequired,
    };

    render() {
        const { userName, totalBalance } = this.props;

        return (
            <Grid style={headerStyle}>
                <Col style={centerStyle}>
                    <Row style={centerStyle}>
                        <Image source={require('../../images/user-icon.png')} />
                        <Text style={headerTextStyle}>{userName}</Text>
                    </Row>
                </Col>
                <Col style={centerStyle}>
                    <Text style={headerTextStyle}>Balance: {totalBalance} $</Text>
                </Col>
            </Grid>
        );
    }
}
