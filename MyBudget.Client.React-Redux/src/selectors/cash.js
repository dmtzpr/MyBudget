import { createSelector } from 'reselect';

const cashSelector = state => state.cash;

export const cashBalanceSelector = createSelector(cashSelector, cash => cash.balance);
