import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Col, Glyphicon } from 'react-bootstrap';

import './navigation-button.less';

class NavigationButton extends React.PureComponent {
    render() {
        const { link, glyph } = this.props;

        return (
            <Col xs={3}>
                <Link to={link}>
                    <Glyphicon glyph={glyph} />
                </Link>
            </Col>
        );
    }
}

NavigationButton.propTypes = {
    link: PropTypes.string.isRequired,
    glyph: PropTypes.string.isRequired,
};

export default NavigationButton;
