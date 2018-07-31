import React from 'react';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { Text, Image } from 'react-native';
import { Col, Row } from 'react-native-easy-grid';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';
import { centerStyle, headerStyle, headerTextStyle } from '../../styles/common-styles';

import styles from './styles';

const removeSignIconSrc = require('../../images/remove-sign.png');
const backSignIconSrc = require('../../images/back-sign.png');
const okSignIconSrc = require('../../images/ok-sign.png');

const StatusBar = ({ statusBarTitle, onAcceptButtonClick, onDeclineButtonClick }) => (
    <Row style={headerStyle}>
        <Col style={centerStyle} onPress={onDeclineButtonClick || Actions.home}>
            <Image style={styles.icon} source={onDeclineButtonClick ? removeSignIconSrc : backSignIconSrc} />
        </Col>
        <Col style={centerStyle}>
            <Text style={headerTextStyle}>{statusBarTitle}</Text>
        </Col>
        <Col style={centerStyle} onPress={onAcceptButtonClick}>
            {onAcceptButtonClick && <Image style={styles.icon} source={okSignIconSrc} />}
        </Col>
    </Row>
);

StatusBar.propTypes = {
    statusBarTitle: PropTypes.string.isRequired,
    onAcceptButtonClick: PropTypes.func,
    onDeclineButtonClick: PropTypes.func,
};

export default onlyUpdateForKeys(['statusBarTitle'])(StatusBar);
