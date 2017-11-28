import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import authentication from './authentication';
import budget from './budget';
import cards from './cards';
import cash from './cash';
import expenseCategories from './expense-categories';

export default combineReducers({
    routing: routerReducer,
    authentication,
    budget,
    cards,
    cash,
    expenseCategories,
});
