'use strict';

var React = require('react'),
    DateTimeField = require('react-bootstrap-datetimepicker'),
    ReactRouter = require('react-router'),
    browserHistory = ReactRouter.browserHistory,
    moment = require('moment');

var StatusBar = require('../../status-bar/jsx/status-bar'),
    AppConfig = require('../../../config'),
    CardsActions = require('../../../actions/cards-actions'),
    CardsStore = require('../../../stores/cards-store');

var Cards = React.createClass({
    getInitialState: function () {
        return {
            selectedCardId: 0,
            date: moment().format(AppConfig.Date.dateFormat),
            amount: 0,
            note: '',
            newDebitCardName: '',
            isAddDebitCardFormShow: false
        }
    },

    _onOkButtonClick: function () {
        if (this.state.selectedCardId && this.state.amount > 0) {
            CardsActions.rechargeDebitCard(this.state.selectedCardId, this.state);
            browserHistory.push('/');
        } else {
            alert('please input correct amount or select debit card');
        }
    },

    _onDateChange: function (newDate) {
        this.setState({date: newDate})
    },

    _onAmountChange: function (event) {
        this.setState({amount: parseInt(event.target.value)});
    },

    _onNoteChange: function (event) {
        this.setState({note: event.target.value});
    },

    _onSelectedCardChange: function (event) {
        this.setState({selectedCardId: parseInt(event.target.value)});
    },

    _onDeleteDebitCardClick: function () {
        if (this.state.selectedCardId !== 0) {
            CardsStore.deleteDebitCard(this.state.selectedCardId);
            this.setState({selectedCardId: 0});
        } else {
            alert('please select debit card');
        }
    },

    _onNewDebitCardNameChange: function (event) {
        this.setState({newDebitCardName: event.target.value});
    },

    _onAddDebitCardNameFormClick: function () {
        this.setState({isAddDebitCardFormShow: true});
    },

    _onHideDebitCardNameFormClick: function () {
        this.setState({
            newDebitCardName: '',
            isAddDebitCardFormShow: false
        });
    },

    _onAddNewDebitCardClick: function () {
        if (this.state.newDebitCardName) {
            CardsActions.addDebitCard(this.state.newDebitCardName);
            this.setState({
                newDebitCardName: '',
                isAddDebitCardFormShow: false
            });
        }
    },

    render: function () {
        var debitCards = CardsStore.getDebitCards();

        return (
            <div>
                <StatusBar statusBarTitle="Add balance to debit card"
                           okButtonClick={this._onOkButtonClick}/>
                <div className="add-cash-container container text-center content-layer">
                    <div className="input-block">
                        <p>Select debit card</p>
                        <select className="form-control"
                                value={this.state.selectedCardId}
                                onChange={this._onSelectedCardChange}>
                            <option value="">-- choose debit card --</option>
                            {debitCards.map(function (card, index) {
                                return <option key={index} value={card.id}>{card.name}</option>
                            })}
                        </select>
                    </div>
                    <div className="input-block">
                        <a className="btn btn-default pull-left"
                           onClick={this._onDeleteDebitCardClick}>Delete debit card</a>
                        <a className="btn btn-default pull-right"
                           onClick={this._onAddDebitCardNameFormClick}>Add debit card</a>
                    </div>
                    <div className={this.state.isAddDebitCardFormShow ? 'show' : 'hidden'}>
                        <div className="input-block">
                            <div className="input-group pull-right">
                                <input type="text" className="form-control" placeholder="Input debit card name"
                                       value={this.state.newDebitCardName}
                                       onChange={this._onNewDebitCardNameChange}/>
                                <div className="input-group-btn">
                                    <button type="button" className="btn btn-default" title="Close"
                                            onClick={this._onHideDebitCardNameFormClick}>
                                        <i className="fa fa-times-circle"></i>
                                    </button>
                                    <button type="button" className="btn btn-default" title="Add"
                                            onClick={this._onAddNewDebitCardClick}>
                                        <i className="fa fa-check-circle"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="input-block">
                        <p>Date</p>
                        <DateTimeField
                            dateTime={this.state.date}
                            format={AppConfig.Date.dateFormat}
                            viewMode="date"
                            inputFormat={AppConfig.Date.dateFormat}
                            onChange={this._onDateChange}
                        />
                    </div>
                    <div className="input-block">
                        <p>Amount</p>
                        <input type="number" className="form-control" name="points" min="0" step="1"
                               value={this.state.amount}
                               onChange={this._onAmountChange}
                        />
                    </div>
                    <div className="input-block">
                        <p>Note</p>
                        <textarea className="form-control"
                                  value={this.state.note}
                                  onChange={this._onNoteChange}>
                        </textarea>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Cards;
