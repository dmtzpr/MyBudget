'use strict';

var React = require('react'),
    ReactPropTypes = React.PropTypes,
    browserHistory = require('react-router').browserHistory;

var StatusBar = React.createClass({
    propTypes: {
        statusBarTitle: ReactPropTypes.string.isRequired,
        okButtonClick: ReactPropTypes.func,
        cancelButtonClick: ReactPropTypes.func
    },

    getDefaultProps: function () {
        return {
            cancelButtonClick: function () {
                browserHistory.push('/');
            }
        };
    },

    render: function () {
        return (
            <div className="container">
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
            </div>
        );
    }
});

module.exports = StatusBar;
