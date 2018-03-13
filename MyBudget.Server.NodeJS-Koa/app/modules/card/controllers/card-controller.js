import pick from 'lodash/pick';
import Card from '../models/card';
import CardService from '../services/card-service';

export default {
    async get(ctx) {
        const { user: { _id: userId } } = ctx;
        const cards = await Card.find({ userId }).select({ __v: 0 });

        ctx.body = { cards };
    },

    async create(ctx) {
        const cardData = {
            ...pick(ctx.request.body, Card.createFields),
            userId: ctx.user._id,
        };

        try {
            const { _id } = await CardService.createCard(cardData);
            const card = await Card.findOne({ _id });

            ctx.status = 201;
            ctx.body = { card };
        } catch (e) {
            ctx.throw(400, e);
        }
    },
    async update(ctx) {
        const { request: { body }, user: { _id: userId }, card } = ctx;

        if (card.userId !== userId.toHexString()) {
            ctx.throw(403, `Forbidden. Card with id "${card._id}" dont belong to user with id ${userId}`);
        }

        const newData = pick(body, Card.rechargeFields);
        newData.amount = parseInt(newData.amount);
        const updatedCard = await CardService.updateCard(newData, card);
        const cardTransaction = updatedCard.debitCardRecharges[updatedCard.debitCardRecharges.length - 1];

        ctx.body = {
            cardTransaction,
            cardId: updatedCard._id,
        };
    },

    async delete(ctx) {
        const { user: { _id: userId }, card } = ctx;

        if (card.userId !== userId.toHexString()) {
            ctx.throw(403, `Forbidden. Card with id "${card._id}" dont belong to user with id ${userId}`);
        }

        await card.remove();

        ctx.body = { id: card._id };
    },
};
