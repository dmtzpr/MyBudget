import React from 'react';
import PropTypes from 'prop-types';
import { Grid, ControlLabel, FormGroup, FormControl } from 'react-bootstrap';

import StatusBar from '../status-bar/status-bar.jsx';

export default class Budget extends React.PureComponent {
    static propTypes = {
        monthBudget: PropTypes.number.isRequired,
        onMonthBudgetChange: PropTypes.func.isRequired,
    };

    state = {
        monthBudget: this.props.monthBudget,
    };

    onSetMonthBudgetButtonClick = () => this.props.onMonthBudgetChange(parseInt(this.state.monthBudget));
    onMonthBudgetChange = e => this.setState({ monthBudget: e.target.value });

    render() {
        return (
            <div>
                <StatusBar statusBarTitle='Budget' onAcceptButtonClick={this.onSetMonthBudgetButtonClick} />
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
