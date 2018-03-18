import React from 'react';
import { Row, Grid } from 'react-native-easy-grid';

import NavigationButton from '../navigation-button/navigation-button';

import { footerStyle } from '../../styles/common-styles';

export default () => (
    <Grid style={footerStyle}>
        <Row>
            <NavigationButton link='home' glyph='home' />
            <NavigationButton link='barchart' glyph='barChart' />
            <NavigationButton link='piechart' glyph='pieChart' />
            <NavigationButton link='settings' glyph='settings' />
        </Row>
    </Grid>
);
