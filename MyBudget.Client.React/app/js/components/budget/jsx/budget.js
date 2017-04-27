var React = require('react'),
    StatusBar = require('../../status-bar/jsx/status-bar'),
    BudgetActions = require('../../../actions/budget-actions'),
    BudgetStore = require('../../../stores/budget-store');

var ReactRouter = require('react-router'),
    browserHistory = ReactRouter.browserHistory;

var Budget = React.createClass({
    getInitialState: function () {
        return BudgetStore.getState();
    },

    _onSetBudgetButtonClick: function () {
        if (this.state.monthBudget > 0) {
            BudgetActions.setNewMonthBudget(this.state.monthBudget);
            browserHistory.push('/');
        }
    },

    _onMonthBudgetChange: function (event) {
        this.setState({monthBudget: event.target.value});
    },

    render: function () {
        return (
            <div>
                <StatusBar statusBarTitle="Budget" okButtonClick={this._onSetBudgetButtonClick}/>
                <div className="add-cash-container container text-center content-layer">
                    <div className="input-block">
                        <p>Month budget: {this.state.monthBudget} $</p>
                        <input type="number" className="form-control" name="points" min="0" step="1"
                               value={this.state.monthBudget} onChange={this._onMonthBudgetChange}/>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Budget;
