import React from 'react';
import PropTypes from 'prop-types';
import { Grid, ControlLabel, FormGroup, FormControl } from 'react-bootstrap';

import StatusBar from '../status-bar/status-bar.jsx';

class Cash extends React.PureComponent {
    constructor(...args) {
        super(...args);

        this.state = {
            date: new Date(),//moment().format(AppConfig.Date.DATE_FORMAT),
            amount: 0,
            note: '',
        };

        this.onAddCashButtonClick = this.onAddCashButtonClick.bind(this);
        this.onAmountChange = this.onAmountChange.bind(this);
        this.onNoteChange = this.onNoteChange.bind(this);
    }

    onAddCashButtonClick() {
        this.props.onAddCash(this.state);
    }

    onAmountChange(e) {
        this.setState({ amount: parseInt(e.target.value) });
    }

    onNoteChange(e) {
        this.setState({ note: e.target.value });
    }

    render() {
        return (
            <div>
                <StatusBar
                    statusBarTitle='Add cash'
                    onAcceptButtonClick={this.onAddCashButtonClick}
                    onDeclineButtonClick={this.props.onGoHome}
                />
                <Grid className='add-cash-container text-center content-layer'>
                    <FormGroup className='input-block'>
                        <ControlLabel>Date</ControlLabel>

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
                        <FormControl
                            componentClass='textarea'
                            value={this.state.note}
                            onChange={this.onNoteChange}
                        />
                    </FormGroup>
                </Grid>
            </div>
        );
    }
}

/*
<DateTimeField
                            dateTime={this.state.date}
                            format={AppConfig.Date.DATE_FORMAT}
                            viewMode="date"
                            inputFormat={AppConfig.Date.DATE_FORMAT}
                            onChange={this._onDateChange}
                        />
*/

Cash.propTypes = {
    onAddCash: PropTypes.func.isRequired,
    onGoHome: PropTypes.func.isRequired,
};

export default Cash;
