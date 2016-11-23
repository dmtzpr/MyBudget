'use strict';

var React = require('react'),
    ReactDOM = require('react-dom'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    browserHistory = ReactRouter.browserHistory;

var Home = require('./components/home/jsx/home'),
    Login = require('./components/login/jsx/login'),
    Settings = require('./components/settings/jsx/settings'),
    Cards = require('./components/cards/jsx/cards'),
    Expense = require('./components/expense/jsx/expense'),
    Budget = require('./components/budget/jsx/budget'),
    Cash = require('./components/cash/jsx/cash'),
    Chart = require('./components/chart/jsx/chart'),
    Main = require('./components/main/jsx/main');

var LoginStore = require('./stores/login-store');
var LoginActions = require('./actions/login-actions');


var jwt = localStorage.getItem('jwt');
if (jwt) {
    LoginActions.login(jwt);
}

var App = React.createClass({
    getInitialState: function () {
        return this._getLoginState();
    },

    componentWillUnmount: function () {
        LoginStore.removeChangeListener(this._onLoginChange);
    },

    componentDidMount: function () {
        LoginStore.addChangeListener(this._onLoginChange);
    },

    _getLoginState() {
        return {
            userLoggedIn: LoginStore.isLoggedIn()
        };
    },

    _onLoginChange: function () {
        var userLoggedInState = LoginStore.getState();

        this.setState(userLoggedInState);

        if (userLoggedInState.isLoggedIn) {
            browserHistory.push('/');
        } else {
            browserHistory.push('/login');
        }
    },

    _requireAuth: function (nextState, replace) {
        if (!LoginStore.isLoggedIn()) {
            replace({
                pathname: '/login',
                state: {nextPathname: nextState.location.pathname}
            })
        }
    },

    render: function () {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Main}>
                    <IndexRoute component={Home} onEnter={this._requireAuth}/>
                    <Route path="home" component={Home} onEnter={this._requireAuth}/>
                    <Route path="login" component={Login}/>
                    <Route path="settings" component={Settings} onEnter={this._requireAuth}/>
                    <Route path="cards" component={Cards} onEnter={this._requireAuth}/>
                    <Route path="expense" component={Expense} onEnter={this._requireAuth}/>
                    <Route path="budget" component={Budget} onEnter={this._requireAuth}/>
                    <Route path="cash" component={Cash} onEnter={this._requireAuth}/>
                    <Route path="barchart" component={Chart} onEnter={this._requireAuth} chartType="Bar"/>
                    <Route path="piechart" component={Chart} onEnter={this._requireAuth} chartType="Pie"/>
                    <Route path="*" component={Home}/>
                </Route>
            </Router>
        );
    }
});

ReactDOM.render((
        <App />
    ), document.getElementById('mybudgetapp')
);