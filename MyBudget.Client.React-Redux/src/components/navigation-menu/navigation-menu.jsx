import React from 'react';
import PropTypes from 'prop-types';
import { onlyUpdateForKeys } from 'recompose';
import { Navbar } from 'react-bootstrap';

import NavigationButton from '../navigation-button/navigation-button.jsx';

import './navigation-menu.less';

const NavigationMenu = ({ currentPath, navButtons }) => (
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

NavigationMenu.propTypes = {
    currentPath: PropTypes.string.isRequired,
    navButtons: PropTypes.array.isRequired,
};

export default onlyUpdateForKeys(['currentPath', 'navButtons'])(NavigationMenu);
