import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-16-bootstrap-date-picker';
import { Grid, ControlLabel, FormGroup, FormControl } from 'react-bootstrap';

import StatusBar from '../status-bar/status-bar.jsx';

export default class Cash extends React.PureComponent {
    static propTypes = {
        onAddCash: PropTypes.func.isRequired,
        onGoHome: PropTypes.func.isRequired,
    };

    state = {
        date: new Date().toISOString(),
        amount: 0,
        note: '',
    };

    onAddCashButtonClick = () => {
        const { date, amount, note } = this.state;

        this.props.onAddCash({
            date,
            amount,
            note,
        });
    };

    onDateChange = (value) => {
        this.setState({ date: value });
    };

    onAmountChange = (e) => {
        this.setState({ amount: parseInt(e.target.value) });
    };

    onNoteChange = (e) => {
        this.setState({ note: e.target.value });
    };

    render() {
        return (
            <div className='add-cash-component'>
                <StatusBar
                    statusBarTitle='Add cash'
                    onAcceptButtonClick={this.onAddCashButtonClick}
                    onDeclineButtonClick={this.props.onGoHome}
                />
                <Grid className='add-cash-container text-center content-layer'>
                    <FormGroup className='input-block'>
                        <ControlLabel>Date</ControlLabel>
                        <DatePicker value={this.state.date} onChange={this.onDateChange} />
                    </FormGroup>
                    <FormGroup className='input-block'>
                        <ControlLabel>Amount</ControlLabel>
                        <FormControl
                            type='number'
                            min='1'
                            step='1'
                            value={this.state.amount}
                            onChange={this.onAmountChange}
                        />
                    </FormGroup>
                    <FormGroup className='input-block'>
                        <ControlLabel>Note</ControlLabel>
                        <FormControl componentClass='textarea' value={this.state.note} onChange={this.onNoteChange} />
                    </FormGroup>
                </Grid>
            </div>
        );
    }
}
