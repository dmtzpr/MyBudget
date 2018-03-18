import React from 'react';
import { Image, View } from 'react-native';

import { centerStyle } from '../../styles/common-styles';
import styles from './styles';

export default () => (
    <View style={centerStyle}>
        <Image style={styles.logo} source={require('../../images/budget.png')} />
    </View>
);
