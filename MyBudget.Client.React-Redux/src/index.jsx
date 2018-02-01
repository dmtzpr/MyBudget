import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Route } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';

import './styles/layout.less';
import Home from './containers/home';
import Cash from './containers/cash';
import Card from './containers/card';
import Expense from './containers/expense';
import Budget from './containers/budget';
import Login from './containers/login';
import NavigationMenu from './components/navigation-menu/navigation-menu.jsx';

import reducer from './reducers';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(reducer, composeWithDevTools(applyMiddleware(middleware, thunk)));

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path='/' component={Home} />
                <Route path='/cash' component={Cash} />
                <Route path='/cards' component={Card} />
                <Route path='/expense' component={Expense} />
                <Route path='/budget' component={Budget} />
                <Route path='/login' component={Login} />
                <NavigationMenu />
            </div>
        </ConnectedRouter >
    </Provider>,
    document.getElementById('mybudgetapp'),
);
