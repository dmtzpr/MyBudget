import React from 'react';
import PropTypes from 'prop-types';
import { Grid, ControlLabel, FormGroup, FormControl } from 'react-bootstrap';

import StatusBar from '../status-bar/status-bar.jsx';

class Budget extends React.PureComponent {
    constructor(...args) {
        super(...args);

        this.state = {
            monthBudget: this.props.monthBudget,
        };

        this.onSetMonthBudgetButtonClick = this.onSetMonthBudgetButtonClick.bind(this);
        this.onMonthBudgetChange = this.onMonthBudgetChange.bind(this);
    }

    onSetMonthBudgetButtonClick() {
        this.props.onMonthBudgetChange(parseInt(this.state.monthBudget));
    }

    onMonthBudgetChange(e) {
        this.setState({ monthBudget: e.target.value });
    }

    render() {
        return (
            <div>
                <StatusBar
                    statusBarTitle='Budget'
                    onAcceptButtonClick={this.onSetMonthBudgetButtonClick}
                    onDeclineButtonClick={this.props.onGoHomeClick}
                />
                <Grid className='add-cash-container text-center content-layer'>
                    <FormGroup className='input-block'>
                        <ControlLabel>Month budget: {this.state.monthBudget} $</ControlLabel>
                        <FormControl
                            type='number'
                            name='points'
                            min='1'
                            step='1'
                            value={this.state.monthBudget}
                            onChange={this.onMonthBudgetChange}
                        />
                    </FormGroup>
                </Grid>
            </div>
        );
    }
}

Budget.propTypes = {
    monthBudget: PropTypes.number.isRequired,
    onMonthBudgetChange: PropTypes.func.isRequired,
    onGoHomeClick: PropTypes.func.isRequired,
};

export default Budget;
