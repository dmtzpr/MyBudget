export default () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return { Authorization: user.token };
    }

    return {};
};
