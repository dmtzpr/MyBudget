import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col, Glyphicon, Button } from 'react-bootstrap';

import './status-bar.less';

class StatusBar extends React.PureComponent {
    constructor(...args) {
        super(...args);
    }

    render() {
        return (
            <Grid>
                <div className='status-bar'>
                    <Row>
                        <Col xs={2}>
                            <a onClick={this.props.onDeclineButtonClick}>
                                <Glyphicon glyph='remove-sign' />
                            </a>
                        </Col>
                        <Col xs={8} className='status-bar-title'>{this.props.statusBarTitle}</Col>
                        <Col xs={2}>
                            {this.props.onAcceptButtonClick ? <a onClick={this.props.onAcceptButtonClick}>
                                <Glyphicon glyph='ok-sign' />
                            </a> : null}
                        </Col>
                    </Row>
                </div>
            </Grid>
        );
    }
}

StatusBar.propTypes = {
    statusBarTitle: PropTypes.string.isRequired,
    onAcceptButtonClick: PropTypes.func,
    onDeclineButtonClick: PropTypes.func,
};

export default StatusBar;
