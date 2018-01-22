import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Cash from '../components/cash/cash.jsx';
import { setMonthBudget } from '../actions/budget';

const mapStateToProps = state => ({
    monthBudget: state.budget,
});

const mapDispatchToProps = dispatch => ({
    onAddCash: monthBudget => dispatch(setMonthBudget(monthBudget)),
    onGoHomeClick: () => dispatch(push('/')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cash);
