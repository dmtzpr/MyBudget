const USER_KEY_NAME = 'user';
const sessionStorage = {};

sessionStorage[USER_KEY_NAME] = null;

export const getUser = () => sessionStorage[USER_KEY_NAME];

export const setUser = (user) => {
    sessionStorage[USER_KEY_NAME] = user;
};

export const removeUser = () => {
    delete sessionStorage[USER_KEY_NAME];
};
