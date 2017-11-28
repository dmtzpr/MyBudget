import React from 'react';
import PropTypes from 'prop-types';
import { Col, Glyphicon } from 'react-bootstrap';

class LinkMenu extends React.PureComponent {
    render() {
        const { name, glyph, label, balance, link } = this.props;


        return (
            <Col xs={6} className={name}>
                <div className='area-icon' >
                    <Glyphicon glyph={glyph} />
                </div>
                <div className='area-info'>
                    <div>{label}</div>
                    <div>{balance} $</div>
                </div>
                <div className='area-button'>
                    <Glyphicon glyph='chevron-right' />
                    {/* <Link to="/cards"><i className="fa fa-chevron-right"></i></Link> */}
                </div>
            </Col>
        );
    }
}

LinkMenu.propTypes = {
    name: PropTypes.string.isRequired,
    glyph: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
};

export default LinkMenu;
