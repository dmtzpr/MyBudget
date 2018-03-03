import Card from '../models/card';

export default {
    async createCard(data) {
        const cardNameCountByUserId = await Card.count({ name: data.name, userId: data.userId });

        if (cardNameCountByUserId !== 0) {
            throw Error('Card with this name is exist');
        }

        return Card.create(data);
    },

    // async updateCash(monthBudget, budget) {
    //     budget.set(monthBudget);

    //     return await budget.save();
    // },
};
