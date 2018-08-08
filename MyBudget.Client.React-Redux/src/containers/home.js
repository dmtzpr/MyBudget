import { connect } from 'react-redux';

import { cardsBalanceSelector, totalExpensesAmountSelector } from '../selectors';
import { cashBalanceSelector } from '../selectors/cash';
import Home from '../components/home/home.jsx';

const getCurrentMonthEntityAmount = (entities, property = 'amount') => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    return entities.reduce((totalAmount, entity) => {
        const expenseDate = new Date(entity.date);

        if (expenseDate.getMonth() === currentMonth && expenseDate.getFullYear() === currentYear) {
            return totalAmount + entity[property];
        }

        return totalAmount;
    }, 0);
};

const getCardsCurrentMonthIncomeAmount = cards =>
    cards.reduce((totalAmount, card) => totalAmount + getCurrentMonthEntityAmount(card.debitCardRecharges), 0);

const getCurrentMonthIncomeAmount = (cashes, cards) =>
    getCurrentMonthEntityAmount(cashes) + getCardsCurrentMonthIncomeAmount(cards);

const getCurrentMonthExpensesAmount = expenses => getCurrentMonthEntityAmount(expenses);

const mapStateToProps = state => ({
    userName: state.authentication.user.username,
    cardsBalance: cardsBalanceSelector(state),
    cashBalance: cashBalanceSelector(state),
    monthBudget: state.budget,
    totalExpensesAmount: totalExpensesAmountSelector(state),
    currentMonthIncomeAmount: getCurrentMonthIncomeAmount(state.cash.cashes, state.cards),
    currentMonthExpensesAmount: getCurrentMonthExpensesAmount(state.expenses),
});

export default connect(mapStateToProps)(Home);
