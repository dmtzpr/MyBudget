import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/helpers/store';
import AppContainer from './src/containers/app';

const App = () => (
    <Provider store={store}>
        <AppContainer />
    </Provider>
);

AppRegistry.registerComponent('MyBudgetClientReactNative', () => App);
