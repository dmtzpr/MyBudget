import React from 'react';
import { Navbar } from 'react-bootstrap';

import NavigationButton from '../navigation-button/navigation-button.jsx';

import './navigation-menu.less';

export default ({ currentPath, navButtons }) => (
    <Navbar className='navigation-menu' fixedBottom>
        <div className='navigation-menu__row navigation-menu__row_size-default'>
            {navButtons.map((navButton, index) => (
                <NavigationButton
                    key={index}
                    link={navButton.link}
                    glyph={navButton.glyph}
                    isActive={navButton.link === currentPath}
                />
            ))}
        </div>
    </Navbar>
);
