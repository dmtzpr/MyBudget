import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { onlyUpdateForKeys } from 'recompose';
import { Glyphicon } from 'react-bootstrap';
import classNames from 'classnames';

import './navigation-button.less';

const NavigationButton = ({ link, glyph, isActive }) => (
    <div className={classNames('navigation-menu__button', { active: isActive })}>
        <Link to={link}>
            <Glyphicon glyph={glyph} />
        </Link>
    </div>
);

NavigationButton.propTypes = {
    link: PropTypes.string.isRequired,
    glyph: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
};

export default onlyUpdateForKeys(['link', 'glyph', 'isActive'])(NavigationButton);
