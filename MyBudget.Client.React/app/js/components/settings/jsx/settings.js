'use strict';

var React = require('react'),
    Link = require('react-router').Link;

var StatusBar = require('../../status-bar/jsx/status-bar'),
    LoginActions = require('../../../actions/login-actions');

var Settings = React.createClass({
    _onLogoutClick: function () {
        LoginActions.logout();
    },

    render: function () {
        return (
            <div>
                <StatusBar statusBarTitle="Settings"/>
                <div className="settings-container container center-block content-layer">
                    <p>
                        <Link to="/login" type="button" className="btn btn-default btn-lg btn-block"
                              onClick={this._onLogoutClick}>Logout</Link>
                    </p>
                </div>
            </div>
        )
    }
});

module.exports = Settings;
