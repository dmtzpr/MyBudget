import Cash from '../models/cash';

export default {
    async createCash(data) {
        try {
            return Cash.create(data);
        } catch (e) {
            throw new AppError({ status: 400, ...e });
        }
    },
};
