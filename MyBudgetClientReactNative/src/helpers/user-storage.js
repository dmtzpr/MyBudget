// import localStorage from 'react-native-sync-localstorage';

const USER_KEY_NAME = 'user';
const localStorage = {};

localStorage[USER_KEY_NAME] = {
    username: 'dima123',
    token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRpbWExMjMiLCJpYXQiOjE1MjExMzIxMDN9.qQSAE_bjXZWwV9P0IlgolMUxkZRF4PmiKY2vJ0WvfEM',
};

export const getUser = () => localStorage[USER_KEY_NAME];

export const setUser = (user) => {
    localStorage[USER_KEY_NAME] = user;
};

export const removeUser = () => {
    delete localStorage[USER_KEY_NAME];
};
