import Cash from '../models/cash';

export default {
    async createCash(data) {
        return Cash.create(data);
    },

    // async updateCash(monthBudget, budget) {
    //     budget.set(monthBudget);

    //     return await budget.save();
    // },
};
