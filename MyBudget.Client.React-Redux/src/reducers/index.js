import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import authentication from './authentication';
import app from './app';
import budget from './budget';
import cards from './cards';
import cash from './cash';
import expenses from './expenses';
import expenseCategories from './expense-categories';

export default combineReducers({
    routing: routerReducer,
    authentication,
    app,
    budget,
    cards,
    cash,
    expenses,
    expenseCategories,
});
