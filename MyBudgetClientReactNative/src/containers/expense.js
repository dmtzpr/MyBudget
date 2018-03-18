import { connect } from 'react-redux';

import Expense from '../components/expense/expenseimport React from 'react';';
import { addExpense } from '../actions/expense';

const getCards = cards =>
    cards.map(card => ({
        id: card.id,
        name: card.name,
        balance: card.balance,
    }));

const getCash = cash => ({
    id: 1,
    name: 'Cash',
    balance: cash.balance,
});

const mapStateToProps = state => ({
    categories: state.expenseCategories,
    paymentTypes: [getCash(state.cash), ...getCards(state.cards)],
});

const mapDispatchToProps = dispatch => ({
    onAddExpense: expense => dispatch(addExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Expense);
