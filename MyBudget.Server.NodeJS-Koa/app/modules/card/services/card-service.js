import Card from '../models/card';

export default {
    async createCard(data) {
        const cardNameCountByUserId = await Card.count({ name: data.name, userId: data.userId });

        if (cardNameCountByUserId !== 0) {
            throw new AppError({ status: 400, message: 'Card with this name is exist' });
        }

        try {
            return Card.create(data);
        } catch (e) {
            throw new AppError({ status: 400, ...e });
        }
    },

    async updateCard(cardRecharge, card) {
        card.balance += cardRecharge.amount;
        card.debitCardRecharges.push(cardRecharge);

        return await card.save();
    },
};
