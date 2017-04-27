var React = require('react'),
    DateTimeField = require('react-bootstrap-datetimepicker'),
    ReactRouter = require('react-router'),
    browserHistory = ReactRouter.browserHistory,
    moment = require('moment');

var StatusBar = require('../../status-bar/jsx/status-bar'),
    AppConfig = require('../../../config'),
    CashActions = require('../../../actions/cash-actions');

var Cash = React.createClass({
    getInitialState: function () {
        return {
            date: moment().format(AppConfig.Date.DATE_FORMAT),
            amount: 0,
            note: ''
        }
    },

    _onAddCashButtonClick: function () {
        CashActions.addCash(this.state);
        browserHistory.push('/');
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

    render: function () {
        return (
            <div>
                <StatusBar statusBarTitle="Add cash"
                           okButtonClick={this._onAddCashButtonClick}/>
                <div className="add-cash-container container text-center content-layer">
                    <div className="input-block">
                        <p>Date</p>
                        <DateTimeField
                            dateTime={this.state.date}
                            format={AppConfig.Date.DATE_FORMAT}
                            viewMode="date"
                            inputFormat={AppConfig.Date.DATE_FORMAT}
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

module.exports = Cash;
