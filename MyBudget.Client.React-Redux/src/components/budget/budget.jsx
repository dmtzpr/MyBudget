import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, ControlLabel, FormGroup, FormControl, HelpBlock } from 'react-bootstrap';

import StatusBar from '../status-bar/status-bar.jsx';
//import LinkMenu from '../link-menu/link-menu.jsx';
//import BalanceArea from '../balance-area/balance-area.jsx';

//import './home.less';


class Budget extends React.PureComponent {
    constructor(...args) {
        super(...args);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            monthBudget: this.props.monthBudget,
        };
    }

    handleChange(e) {
        this.setState({ monthBudget: e.target.value });
    }

    render() {
        return (
            <div>
                <StatusBar statusBarTitle="Budget" okButtonClick={this._onSetBudgetButtonClick} />
                <Grid className='add-cash-container text-center content-layer'>
                    <FormGroup className='input-block'>
                        <ControlLabel>Month budget: {this.state.monthBudget} $</ControlLabel>
                        <FormControl
                            type='number'
                            name='points'
                            min='1'
                            step='1'
                            value={this.state.monthBudget}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                </Grid>
            </div>
        );
    }
}

Budget.propTypes = {
    monthBudget: PropTypes.number.isRequired,
};

export default Budget;

/*var React = require('react'),
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
        this.setState({ monthBudget: event.target.value });
    },

    render: function () {
        return (
           
        );
    }
});*/

module.exports = Budget;
