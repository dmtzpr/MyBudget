import React from 'react';
import { Text, View } from 'react-native';

import { footerStyle, centerStyle } from '../../styles/common-styles';
import styles from './styles';

export default () => (
    <View style={[centerStyle, footerStyle]}>
        <Text style={styles.footerText}>myBudget application</Text>
    </View>
);
