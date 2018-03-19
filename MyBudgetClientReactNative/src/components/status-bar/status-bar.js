import React from 'react';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { Text, Image } from 'react-native';
import { Col, Row } from 'react-native-easy-grid';
import { centerStyle, headerStyle, headerTextStyle } from '../../styles/common-styles';

import styles from './styles';

export default class StatusBar extends React.PureComponent {
    static propTypes = {
        statusBarTitle: PropTypes.string.isRequired,
        onAcceptButtonClick: PropTypes.func,
        onDeclineButtonClick: PropTypes.func,
    };

    render() {
        return (
            <Row style={headerStyle}>
                <Col style={centerStyle} onPress={this.props.onDeclineButtonClick || Actions.home}>
                    <Image
                        style={styles.icon}
                        source={
                            this.props.onDeclineButtonClick
                                ? require('../../images/remove-sign.png')
                                : require('../../images/back-sign.png')
                        }
                    />
                </Col>
                <Col style={centerStyle}>
                    <Text style={headerTextStyle}>{this.props.statusBarTitle}</Text>
                </Col>
                <Col style={centerStyle} onPress={this.props.onAcceptButtonClick}>
                    {this.props.onAcceptButtonClick && (
                        <Image style={styles.icon} source={require('../../images/ok-sign.png')} />
                    )}
                </Col>
            </Row>
        );
    }
}
