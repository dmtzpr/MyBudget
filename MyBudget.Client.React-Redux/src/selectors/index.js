import { createSelector } from 'reselect';

const entityAmountSelector = (entities, property) =>
    entities.reduce((totalAmount, entity) => totalAmount + entity[property], 0);

export const cardsSelector = state => state.cards;
export const expensesSelector = state => state.expenses;

export const cardsBalanceSelector = createSelector(cardsSelector, () => 'balance', entityAmountSelector);
export const totalExpensesAmountSelector = createSelector(expensesSelector, () => 'amount', entityAmountSelector);
