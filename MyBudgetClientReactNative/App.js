import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/helpers/store';
import Routes from './src/Routes';

export default () => (
    <Provider store={store}>
        <Routes />
    </Provider>
);
