import React from 'react';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { Image } from 'react-native';
import { Col } from 'react-native-easy-grid';

import images from './images';
import styles from './styles';
import { centerStyle } from '../../styles/common-styles';

export default class NavigationButton extends React.PureComponent {
    static propTypes = {
        link: PropTypes.string.isRequired,
        glyph: PropTypes.string.isRequired,
    };

    render() {
        const { link, glyph } = this.props;

        return (
            <Col size={3} style={centerStyle} onPress={Actions[link]}>
                <Image style={styles.icon} source={images[glyph]} />
            </Col>
        );
    }
}
