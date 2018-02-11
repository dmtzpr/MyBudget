import React from 'react';
import { Row, Navbar } from 'react-bootstrap';

import NavigationButton from '../navigation-button/navigation-button.jsx';

import './navigation-menu.less';

export default () => (
    <Navbar id='navigation-menu' fixedBottom>
        <Row>
            <NavigationButton link='/' glyph='home' />
            <NavigationButton link='/barchart' glyph='stats' />
            <NavigationButton link='/piechart' glyph='adjust' />
            <NavigationButton link='/settings' glyph='cog' />
        </Row>
    </Navbar>
);
