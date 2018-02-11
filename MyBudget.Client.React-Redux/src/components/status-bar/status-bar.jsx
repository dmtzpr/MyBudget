import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Glyphicon } from 'react-bootstrap';

import './status-bar.less';

export default class StatusBar extends React.PureComponent {
    static propTypes = {
        statusBarTitle: PropTypes.string.isRequired,
        onAcceptButtonClick: PropTypes.func.isRequired,
        onDeclineButtonClick: PropTypes.func.isRequired,
    };

    getRemoveIcon = () => <Glyphicon glyph='remove-sign' />;

    render() {
        return (
            <Grid>
                <div className='status-bar'>
                    <Row>
                        <Col xs={2}>
                            {this.props.onDeclineButtonClick ? (
                                <a onClick={this.props.onDeclineButtonClick}>{this.getRemoveIcon()}</a>
                            ) : (
                                <Link to='/'>{this.getRemoveIcon()}</Link>
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
