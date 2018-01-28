import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Cash from '../components/cash/cash.jsx';
import { addCash } from '../actions/cash';

const mapStateToProps = state => ({
    monthBudget: state.budget,
});

const mapDispatchToProps = dispatch => ({
    onAddCash: cash => dispatch(addCash(cash)),
    onGoHome: () => dispatch(push('/')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cash);
