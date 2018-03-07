import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import { history } from '../../helpers/history';

import Home from '../../containers/home';
import Cash from '../../containers/cash';
import Card from '../../containers/card';
import Expense from '../../containers/expense';
import ExpenseCategory from '../../containers/expense-category';
import Budget from '../../containers/budget';
import Login from '../../containers/login';

import BarChart from '../../containers/bar-chart';
import PieChart from '../../containers/pie-chart';

import Settings from '../../components/settings/settings.jsx';
import NavigationMenu from '../../components/navigation-menu/navigation-menu.jsx';
import PrivateRoute from '../../components/private-route/private-route.jsx';

import './app.less';

export default class App extends React.PureComponent {
    static propTypes = {
        onAppLoad: PropTypes.func.isRequired,
        isLoading: PropTypes.bool.isRequired,
    };

    componentWillMount() {
        this.props.onAppLoad();
    }

    render() {
        const { isLoading } = this.props;

        return (
            <div>
                {isLoading ? (
                    <div className='loading'>Loading...</div>
                ) : (
                    <ConnectedRouter history={history}>
                        <div>
                            <PrivateRoute exact path='/' component={Home} />
                            <PrivateRoute path='/cash' component={Cash} />
                            <PrivateRoute path='/cards' component={Card} />
                            <PrivateRoute path='/expense' component={Expense} />
                            <PrivateRoute path='/expense-category' component={ExpenseCategory} />
                            <PrivateRoute path='/budget' component={Budget} />
                            <PrivateRoute path='/barchart' component={BarChart} />
                            <PrivateRoute path='/piechart' component={PieChart} />
                            <PrivateRoute path='/settings' component={Settings} />
                            <Route path='/login' component={Login} />
                            <NavigationMenu />
                        </div>
                    </ConnectedRouter>
                )}
            </div>
        );
    }
}
