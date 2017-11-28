import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Glyphicon } from 'react-bootstrap';

import './header.less';

class Header extends React.PureComponent {
    render() {
        const { userName, totalBalance } = this.props;

        return (
            <div className='status-bar'>
                <Row >
                    <Col xs={6}>
                        <div><Glyphicon glyph='user' /> {userName}</div>
                    </Col>
                    <Col xs={6}>
                        <span>Balance: {totalBalance} $</span>
                    </Col>
                </Row>
            </div>
        );
    }
}

Header.propTypes = {
    userName: PropTypes.string.isRequired,
    totalBalance: PropTypes.number.isRequired,
};

export default Header;
