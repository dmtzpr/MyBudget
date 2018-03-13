import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Glyphicon } from 'react-bootstrap';

import './status-bar.less';

export default class StatusBar extends React.PureComponent {
    static propTypes = {
        statusBarTitle: PropTypes.string.isRequired,
        onAcceptButtonClick: PropTypes.func,
        onDeclineButtonClick: PropTypes.func,
    };

    render() {
        return (
            <Grid>
                <div className='status-bar'>
                    <Row>
                        <Col xs={2}>
                            {this.props.onDeclineButtonClick ? (
                                <a onClick={this.props.onDeclineButtonClick}>
                                    <Glyphicon glyph='remove-sign' />
                                </a>
                            ) : (
                                <Link to='/'>
                                    <Glyphicon glyph='circle-arrow-left' />
                                </Link>
                            )}
                        </Col>
                        <Col xs={8} className='status-bar-title'>
                            {this.props.statusBarTitle}
                        </Col>
                        <Col xs={2}>
                            {this.props.onAcceptButtonClick && (
                                <a onClick={this.props.onAcceptButtonClick}>
                                    <Glyphicon glyph='ok-sign' />
                                </a>
                            )}
                        </Col>
                    </Row>
                </div>
            </Grid>
        );
    }
}
