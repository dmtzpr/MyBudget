import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row } from 'react-bootstrap';

import NavigationButton from '../navigation-button/navigation-button.jsx';

import './navigation-menu.less';

const NavigationMenu = () => (
    <div id='navigation-menu' className='navbar navbar-fixed-bottom'>
        <Grid>
            <Row>
                <NavigationButton link='/home' glyph='home' />
                <NavigationButton link='/barchart' glyph='stats' />
                <NavigationButton link='/piechart' glyph='adjust' />
                <NavigationButton link='/settings' glyph='cog' />
            </Row>
        </Grid>
    </div>
);

export default NavigationMenu;
