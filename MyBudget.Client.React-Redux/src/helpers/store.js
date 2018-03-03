import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';

import { history } from './history';
import reducer from '../reducers';

const middleware = routerMiddleware(history);

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(middleware, thunk)));
