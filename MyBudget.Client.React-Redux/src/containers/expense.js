import { connect } from 'react-redux';

import Expense from '../components/expense/expense.jsx';
import { addExpense } from '../actions/expense';

const mapStateToProps = state => ({
    monthBudget: state.budget,
});

const mapDispatchToProps = dispatch => ({
    onAddCash: cash => dispatch(addExpense(cash)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Expense);
