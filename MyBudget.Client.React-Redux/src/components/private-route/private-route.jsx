import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { getUser } from '../../helpers/user-storage';

export default ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            (getUser() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            ))
        }
    />
);
