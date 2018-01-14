import { connect } from 'react-redux';

import Budget from '../components/budget/budget.jsx';
//import { login } from '../actions/budget';

const mapStateToProps = state => ({
    monthBudget: state.budget,
});
/*
const mapDispatchToProps = dispatch => ({
    onLogin: (username, password) => dispatch(login(username, password)),
});
*/
export default connect(mapStateToProps/*, mapDispatchToProps*/)(Budget);
