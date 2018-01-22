import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Budget from '../components/budget/budget.jsx';
import { setMonthBudget } from '../actions/budget';

const mapStateToProps = state => ({
    monthBudget: state.budget,
});

const mapDispatchToProps = dispatch => ({
    onMonthBudgetChange: monthBudget => dispatch(setMonthBudget(monthBudget)),
    onGoHomeClick: () => dispatch(push('/')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Budget);
