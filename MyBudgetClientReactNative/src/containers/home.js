import { connect } from 'react-redux';

import Home from '../components/home/home';

const getEntityAmount = (entities, property) =>
    entities.reduce((totalAmount, entity) => totalAmount + entity[property], 0);

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
    cardsBalance: getEntityAmount(state.cards, 'balance'),
    cashBalance: state.cash.balance,
    monthBudget: state.budget,
    totalExpensesAmount: getEntityAmount(state.expenses, 'amount'),
    currentMonthIncomeAmount: getCurrentMonthIncomeAmount(state.cash.cashes, state.cards),
    currentMonthExpensesAmount: getCurrentMonthExpensesAmount(state.expenses),
});

export default connect(mapStateToProps)(Home);
