import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import authentication from './authentication';
import registration from './registration';
import app from './app';
import budget from './budget';
import cards from './cards';
import cash from './cash';
import expenses from './expenses';
import expenseCategories from './expense-categories';

export default combineReducers({
    routing: routerReducer,
    authentication,
    registration,
    app,
    budget,
    cards,
    cash,
    expenses,
    expenseCategories,
});
