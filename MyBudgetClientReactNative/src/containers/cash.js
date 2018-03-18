import { connect } from 'react-redux';

import Cash from '../components/cash/cashimport React from 'react';';
import { addCash } from '../actions/cash';

const mapStateToProps = state => ({
    monthBudget: state.budget,
});

const mapDispatchToProps = dispatch => ({
    onAddCash: cash => dispatch(addCash(cash)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cash);
