import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

class BalanceArea extends React.PureComponent {
    render() {
        const { name, label, balance } = this.props;

        return (
            <Col xs={6} className={name}>
                <div className='area-info'>
                    <div>{label}</div>
                    <div>{balance} $</div>
                </div>
            </Col>
        );
    }
}

BalanceArea.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
};

export default BalanceArea;
