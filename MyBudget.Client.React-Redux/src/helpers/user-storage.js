const USER_KEY_NAME = 'user';

export const getUser = () => JSON.parse(localStorage.getItem(USER_KEY_NAME));

export const setUser = (user) => {
    localStorage.setItem(USER_KEY_NAME, JSON.stringify(user));
};

export const removeUser = () => {
    localStorage.removeItem(USER_KEY_NAME);
};
