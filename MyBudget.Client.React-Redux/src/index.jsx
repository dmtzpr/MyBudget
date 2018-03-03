import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './helpers/store';

import './styles/layout.less';
import App from './containers/app';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('mybudgetapp'),
);
