import { connect } from 'react-redux';

import Budget from '../components/budget/budget.jsx';
import { setMonthBudget } from '../actions/budget';

const mapStateToProps = state => ({
    monthBudget: state.budget,
});

const mapDispatchToProps = dispatch => ({
    onMonthBudgetChange: monthBudget => dispatch(setMonthBudget(monthBudget)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Budget);
