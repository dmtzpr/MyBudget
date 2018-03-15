import { getUser } from './user-storage';

export default () => {
    const user = getUser();

    if (user && user.token) {
        return { Authorization: user.token };
    }

    return {};
};
