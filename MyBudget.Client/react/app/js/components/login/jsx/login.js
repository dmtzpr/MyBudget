var React = require('react'),
    ReactPropTypes = React.PropTypes;

var Login = React.createClass({
    propTypes: {
        isSignInFailed: ReactPropTypes.bool.isRequired
    },

    getInitialState: function () {
        return {
            username: '',
            password: ''

        };
    },

    _onChangeUserName: function (event) {
        this.setState({
            username: event.target.value
        });
    },

    _onChangePassword: function () {
        this.setState({
            password: event.target.value
        });
    },

    _onSignInButtonClick: function () {
        alert(this.state.username);
    },
    
    render: function () {
        var self = this,
            message = self.props.isSignInFailed ? 'Username or password is incorrect' : '';

        return (
            <div className="container sing-in-container">
                <div className="logo-panel">
                    <span className="budget-icon"></span>
                </div>
                <form role="form" name="signin-form">
                    <div className="form-group">
                        <div className="input-group input-group-lg">
                            <span className="input-group-addon"><i className="fa fa-user fa-fw"></i></span>
                            <input type="text" className="form-control" placeholder="Username"
                                   onChange={self._onChangeUserName} value={self.state.username}
                                   required/>
                        </div>
                        <div className="input-group input-group-lg">
                            <span className="input-group-addon"><i className="fa fa-lock fa-fw"></i></span>
                            <input type="password" className="form-control" placeholder="Password"
                                   onChange={self._onChangePassword} value={self.state.password} required/>
                        </div>
                    </div>
                    <button className="btn btn-default btn-block btn-lg" type="submit"
                            onClick={self._onSignInButtonClick}>Sign in
                    </button>
                    <h3 className="text-danger text-center">{message}</h3>
                </form>
                <div className="signin-footer-panel">
                    <span>myBudget application</span>
                </div>
            </div>
        );
    }
});

module.exports = Login;
