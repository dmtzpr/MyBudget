import authHeader from '../helpers/auth-header';

export const userService = {
    login: (username, password) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        };

        return fetch('/users/authenticate', requestOptions)
            .then((response) => {
                if (!response.ok) {
                    return Promise.reject(response.statusText);
                }

                return response.json();
            })
            .then((user) => {
                if (user && user.token) {
                    localStorage.setItem('user', JSON.stringify(user));
                }

                return user;
            });
    },
    logout: () => {
        localStorage.removeItem('user');
    },
};

