import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Card from '../components/card/card.jsx';
import { rechargeCard } from '../actions/card';

const mapStateToProps = state => ({
    debitCards: state.cards,
});

const mapDispatchToProps = dispatch => ({
    onRechargeCard: cardTransaction => dispatch(rechargeCard(cardTransaction)),
    onGoHome: () => dispatch(push('/')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
