var React = require('react'),
    ReactRouter = require('react-router'),
    browserHistory = ReactRouter.browserHistory;

var LoginActions = require('../../../actions/login-actions'),
    LoginStore = require('../../../stores/login-store');

var Login = React.createClass({
    getInitialState: function () {
        return {
            login: '',
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
            login: event.target.value
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
        var loginState = LoginStore.getState();

        if (loginState.isLoggedIn) {
            browserHistory.push('home');
        }

        return {
            login: '',
            password: ''
        }
    },

    _onSignInButtonClick: function () {
        if (this.state.login && this.state.password) {
            LoginActions.login(this.state.login, this.state.password);
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
                        <div name="signin-form">
                            <div className="form-group">
                                <div className="input-group input-group-lg">
                                    <span className="input-group-addon"><i className="fa fa-user fa-fw"></i></span>
                                    <input type="text" className="form-control" placeholder="Username"
                                           onChange={this._onChangeUserName}
                                           value={this.state.login}
                                           required/>
                                </div>
                                <div className="input-group input-group-lg">
                                    <span className="input-group-addon"><i className="fa fa-lock fa-fw"></i></span>
                                    <input type="password" className="form-control" placeholder="Password"
                                           onChange={this._onChangePassword}
                                           value={this.state.password} required/>
                                </div>
                            </div>
                            <button className="btn btn-default btn-block btn-lg"
                                    onClick={this._onSignInButtonClick}>Sign in
                            </button>
                        </div>
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
