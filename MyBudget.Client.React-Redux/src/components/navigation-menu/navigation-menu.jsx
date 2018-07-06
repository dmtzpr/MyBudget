import React from 'react';
import { Navbar } from 'react-bootstrap';

import NavigationButton from '../navigation-button/navigation-button.jsx';

import './navigation-menu.less';

export default () => (
    <Navbar className='navigation-menu' fixedBottom>
        <div className='navigation-menu__row navigation-menu__row_size-default'>
            <NavigationButton link='/' glyph='home' />
            <NavigationButton link='/barchart' glyph='stats' />
            <NavigationButton link='/piechart' glyph='adjust' />
            <NavigationButton link='/settings' glyph='cog' />
        </div>
    </Navbar>
);
