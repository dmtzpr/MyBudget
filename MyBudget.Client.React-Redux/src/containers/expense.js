import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Expense from '../components/expense/expense.jsx';
import { addExpense } from '../actions/expense';

const mapStateToProps = state => ({
    monthBudget: state.budget,
});

const mapDispatchToProps = dispatch => ({
    onAddCash: cash => dispatch(addExpense(cash)),
    onGoHome: () => dispatch(push('/')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Expense);
