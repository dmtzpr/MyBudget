import { applyMiddleware, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { history } from './history';
import rootReducer from '../reducers';

const middleware = routerMiddleware(history);

export const store = createStore(
    connectRouter(history)(rootReducer),
    composeWithDevTools(applyMiddleware(middleware, thunk)),
);
