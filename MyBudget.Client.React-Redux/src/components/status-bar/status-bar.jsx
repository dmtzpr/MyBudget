import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row } from 'react-bootstrap';


class StatusBar extends React.PureComponent {
    constructor(props) {
        super();
    }

    render() {
        return (
            <Grid>
                <div className="status-bar">
                    <div className="row">
                        <div className="col-xs-2 fa-2x">
                            <a onClick={this.props.cancelButtonClick}>
                                <i className="fa fa-times-circle"></i>
                            </a>
                        </div>
                        <div className="col-xs-8 status-bar-title">{this.props.statusBarTitle}</div>
                        <div className="col-xs-2 fa-2x">
                            {this.props.okButtonClick ? <a onClick={this.props.okButtonClick}>
                                <i className="fa fa-check-circle"></i>
                            </a> : null}
                        </div>
                    </div>
                </div>
            </Grid>
        );
    }
}

/*StatusBar.propTypes = {
    statusBarTitle: PropTypes.string.isRequired,
    okButtonClick: PropTypes.func.isRequired,
    cancelButtonClick: PropTypes.func.isRequired,
};*/

export default StatusBar;
