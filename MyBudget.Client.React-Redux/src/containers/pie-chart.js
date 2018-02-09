import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import PieChart from '../components/pie-chart/pie-chart.jsx';

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
        { name: 'Income', value: getCurrentMonthIncomeAmount(state.cashes, state.cards) },
        { name: 'Total', value: getEntityAmount(state.expenses, 'amount') },
        { name: 'Expenses', value: getCurrentMonthExpensesAmount(state.expenses) },
    ],
    colors: ['#008E4C', '#FFC400', '#DE4334'],
});

const mapDispatchToProps = dispatch => ({
    onGoHome: () => dispatch(push('/')),
});

export default connect(mapStateToProps, mapDispatchToProps)(PieChart);
