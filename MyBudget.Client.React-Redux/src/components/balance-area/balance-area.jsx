import React from 'react';
import PropTypes from 'prop-types';
import { Col, Glyphicon } from 'react-bootstrap';

class BalanceArea extends React.PureComponent {
    render() {
        const { name, glyph, label, balance } = this.props;

        return (
            <Col xs={4} className={name}>
                <div className='area-info'>
                    <div><Glyphicon glyph={glyph} /></div>
                    <div>{label}</div>
                    <div>{balance} $</div>
                </div>
            </Col>
        );
    }
}

BalanceArea.propTypes = {
    name: PropTypes.string.isRequired,
    glyph: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
};

export default BalanceArea;
