import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import authentication from './authentication';
import budget from './budget';
import cards from './cards';
import cashes from './cashes';
import expenses from './expenses';
import expenseCategories from './expense-categories';

export default combineReducers({
    routing: routerReducer,
    authentication,
    budget,
    cards,
    cashes,
    expenses,
    expenseCategories,
});
