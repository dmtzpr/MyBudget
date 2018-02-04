import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col, Glyphicon } from 'react-bootstrap';

import './status-bar.less';

export default class StatusBar extends React.PureComponent {
    propTypes = {
        statusBarTitle: PropTypes.string.isRequired,
        onAcceptButtonClick: PropTypes.func.isRequired,
        onDeclineButtonClick: PropTypes.func.isRequired,
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
