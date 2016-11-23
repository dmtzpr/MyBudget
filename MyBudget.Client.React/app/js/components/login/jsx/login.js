'use strict';

var React = require('react'),
    ReactRouter = require('react-router'),
    browserHistory = ReactRouter.browserHistory;

var LoginActions = require('../../../actions/login-actions'),
    LoginStore = require('../../../stores/login-store');

var AuthenticationService = require('../../../services/authentication-service');

var Login = React.createClass({
    getInitialState: function () {
        return {
            username: '',
            password: '',
            isSignInFailed: false
        };
    },

    componentWillUnmount() {
        LoginStore.removeChangeListener(this._onChange);
    },

    componentDidMount() {
        LoginStore.addChangeListener(this._onChange);
    },

    _onChangeUserName: function (event) {
        this.setState({
            username: event.target.value
        });
    },

    _onChangePassword: function (event) {
        this.setState({
            password: event.target.value
        });
    },

    _onChange() {
        this.setState(this._getLoginState());
    },

    _getLoginState() {
        var loginState = LoginStore.getState(),
            isSignInFailed = false;

        if (loginState.isLoggedIn) {
            browserHistory.push('home');
        } else {
            isSignInFailed = true;
        }

        return {
            username: '',
            password: '',
            isSignInFailed: isSignInFailed
        }
    },

    _onSignInButtonClick: function () {
        if (this.state.username && this.state.password) {
            AuthenticationService.login(this.state.username, this.state.password);
        }
    },

    render: function () {
        return (
            <div className="container sing-in-container">
                <div className="logo-panel">
                    <span className="budget-icon"></span>
                </div>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <form role="form" name="signin-form">
                            <div className="form-group">
                                <div className="input-group input-group-lg">
                                    <span className="input-group-addon"><i className="fa fa-user fa-fw"></i></span>
                                    <input type="text" className="form-control" placeholder="Username"
                                           onChange={this._onChangeUserName}
                                           value={this.state.username}
                                           required/>
                                </div>
                                <div className="input-group input-group-lg">
                                    <span className="input-group-addon"><i className="fa fa-lock fa-fw"></i></span>
                                    <input type="password" className="form-control" placeholder="Password"
                                           onChange={this._onChangePassword}
                                           value={this.state.password} required/>
                                </div>
                            </div>
                            <button className="btn btn-default btn-block btn-lg" type="submit"
                                    onClick={this._onSignInButtonClick}>Sign in
                            </button>
                            <h3 className="text-danger text-center">
                                {this.state.isSignInFailed ? 'Username or password is incorrect!' : ''}
                            </h3>
                        </form>
                    </div>
                </div>
                <div className="signin-footer-panel">
                    <span>myBudget application</span>
                </div>
            </div>
        );
    }
});

module.exports = Login;
