import { connect } from 'react-redux';

import { chartColors } from '../constants/chart';
import BarChart from '../components/charts/bar-chartimport React from 'react';';

const getEntityAmount = (entities, property) =>
    entities.reduce((totalAmount, entity) => totalAmount + entity[property], 0);

const getCurrentMonthEntityAmount = (entities, property) => {
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

const getCurrentMonthIncomeAmount = (cashes, cards) =>
    getCurrentMonthEntityAmount(cashes, 'amount') + getCurrentMonthEntityAmount(cards, 'balance');

const getCurrentMonthExpensesAmount = expenses => getCurrentMonthEntityAmount(expenses, 'amount');

const mapStateToProps = state => ({
    chartData: [
        {
            name: 'income',
            income: getCurrentMonthIncomeAmount(state.cash.cashes, state.cards),
        },
        {
            name: 'total',
            total: getEntityAmount(state.expenses, 'amount'),
        },
        {
            name: 'expenses',
            expenses: getCurrentMonthExpensesAmount(state.expenses),
        },
    ],
    chartColors,
});

export default connect(mapStateToProps)(BarChart);
