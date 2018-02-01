import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Card from '../components/card/card.jsx';
import { addCard, rechargeCard, deleteCard } from '../actions/card';

const mapStateToProps = state => ({
    debitCards: state.cards,
});

const mapDispatchToProps = dispatch => ({
    onAddCard: cardName => dispatch(addCard(cardName)),
    onRechargeCard: cardTransaction => dispatch(rechargeCard(cardTransaction)),
    onDeleteCard: cardId => dispatch(deleteCard(cardId)),
    onGoHome: () => dispatch(push('/')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
