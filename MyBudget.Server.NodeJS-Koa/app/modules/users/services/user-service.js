import User from '../models/user';

export default {
    async createUser(data) {
        return await User.create(data);
    },

    getUserWithPublicFields(params) {
        return User.findOne(params).select({ password: 0, __v: 0, createdAt: 0, updatedAt: 0 });
    },
};
