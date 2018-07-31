import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Glyphicon } from 'react-bootstrap';

import './navigation-button.less';

export default ({ link, glyph, isActive }) => (
    <div className={`navigation-menu__button ${isActive ? 'active' : ''}`}>
        <Link to={link}>
            <Glyphicon glyph={glyph} />
        </Link>
    </div>
);

// static propTypes = {
//     link: PropTypes.string.isRequired,
//     glyph: PropTypes.string.isRequired,
//     isActive: PropTypes.bool.isRequired,
// };
