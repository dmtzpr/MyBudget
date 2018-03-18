import React from 'react';
import { Text, View } from 'react-native';

import { footerStyle } from '../../styles/common-styles';
import styles from './styles';

export default () => (
    <View style={footerStyle}>
        <Text style={styles.footerText}>myBudget application</Text>
    </View>
);
