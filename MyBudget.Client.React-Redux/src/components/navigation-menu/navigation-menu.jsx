import React from 'react';
import { Grid, Row } from 'react-bootstrap';

import NavigationButton from '../navigation-button/navigation-button.jsx';

import './navigation-menu.less';

export default () => (
    <div id='navigation-menu' className='navbar navbar-fixed-bottom'>
        <Grid>
            <Row>
                <NavigationButton link='/' glyph='home' />
                <NavigationButton link='/barchart' glyph='stats' />
                <NavigationButton link='/piechart' glyph='adjust' />
                <NavigationButton link='/settings' glyph='cog' />
            </Row>
        </Grid>
    </div>
);
