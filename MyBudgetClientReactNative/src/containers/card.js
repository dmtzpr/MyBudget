import { connect } from 'react-redux';

import Card from '../components/card/cardimport React from 'react';';
import { addCard, rechargeCard, deleteCard } from '../actions/card';

const mapStateToProps = state => ({
    debitCards: state.cards,
});

const mapDispatchToProps = dispatch => ({
    onAddCard: cardName => dispatch(addCard(cardName)),
    onRechargeCard: cardTransaction => dispatch(rechargeCard(cardTransaction)),
    onDeleteCard: cardId => dispatch(deleteCard(cardId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
