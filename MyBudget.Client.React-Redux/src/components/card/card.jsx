import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-16-bootstrap-date-picker';
import { Grid, ControlLabel, FormGroup, FormControl, ButtonGroup, Button, InputGroup, Glyphicon, HelpBlock } from 'react-bootstrap';

import StatusBar from '../status-bar/status-bar.jsx';

export default class Card extends React.PureComponent {
    static propTypes = {
        onAddCard: PropTypes.func.isRequired,
        onRechargeCard: PropTypes.func.isRequired,
        onDeleteCard: PropTypes.func.isRequired,
        onGoHome: PropTypes.func.isRequired,
        debitCards: PropTypes.array.isRequired,
    };

    state = {
        selectedCardId: 0,
        date: new Date().toISOString(),
        amount: 1,
        note: '',
        newCardName: '',
        isAddDebitCardFormShow: false,
        isCardSelected: true,
    };

    onRechargeCardButtonClick = () => {
        const state = this.state;

        if (this.state.selectedCardId && this.state.amount > 0) {
            this.props.onRechargeCard({
                id: state.selectedCardId,
                amount: this.state.amount,
                date: this.state.date,
                note: this.state.note,
            });
        } else {
            this.setState({ isCardSelected: false });
        }
    }

    onDateChange = (value) => {
        this.setState({ date: value });
    }

    onAmountChange = (e) => {
        this.setState({ amount: parseInt(e.target.value) });
    }

    onNoteChange = (e) => {
        this.setState({ note: e.target.value });
    }

    onSelectedCardChange = (e) => {
        this.setState({
            isCardSelected: true,
            selectedCardId: parseInt(e.target.value),
        });
    }

    onDeleteDebitCardClick = () => {
        if (this.state.selectedCardId !== 0) {
            this.props.onDeleteCard(this.state.selectedCardId);
        } else {
            this.setState({ isCardSelected: false });
        }
    }

    onNewCardNameChange = (e) => {
        this.setState({ newCardName: e.target.value });
    }

    onAddDebitCardNameFormClick = () => {
        this.setState({ isAddDebitCardFormShow: true });
    }

    onHideDebitCardNameFormClick = () => {
        this.setState({
            newCardName: '',
            isAddDebitCardFormShow: false,
        });
    }

    onAddNewDebitCardClick = () => {
        if (this.state.newCardName) {
            this.props.onAddCard(this.state.newCardName);
            //CardsActions.addDebitCard(this.state.newDebitCardName);
            this.setState({
                newDebitCardName: '',
                isAddDebitCardFormShow: false,
            });
        }
    }

    render() {
        return (
            <div className='card-component'>
                <StatusBar
                    statusBarTitle='Add balance to debit card'
                    onAcceptButtonClick={this.onRechargeCardButtonClick}
                    onDeclineButtonClick={this.props.onGoHome}
                />
                <Grid className='add-cash-container text-center content-layer'>
                    <FormGroup
                        className='input-block'
                        validationState={this.state.isCardSelected ? null : 'error'}
                    >
                        <ControlLabel>Select debit card</ControlLabel>
                        <FormControl
                            componentClass='select'
                            placeholder='-- choose debit card --'
                            value={this.state.selectedCardId}
                            onChange={this.onSelectedCardChange}
                        >
                            <option value='-- choose debit card --'>-- choose debit card --</option>
                            {this.props.debitCards.map((card, index) =>
                                <option key={index} value={card.id}>{card.name}</option>)}
                        </FormControl>
                        {this.state.isCardSelected ? null : <HelpBlock>Please select debit card</HelpBlock>}
                    </FormGroup>
                    <FormGroup className='input-block'>
                        <ButtonGroup>
                            <Button onClick={this.onDeleteDebitCardClick}>Delete debit card</Button>
                            <Button onClick={this.onAddDebitCardNameFormClick}>Add debit card</Button>
                        </ButtonGroup>
                    </FormGroup>
                    <div className={this.state.isAddDebitCardFormShow ? 'show' : 'hidden'}>
                        <div className='input-block'>
                            <InputGroup className='pull-right'>
                                <FormControl
                                    type='text'
                                    placeholder='Input debit card name'
                                    value={this.state.newCardName}
                                    onChange={this.onNewCardNameChange}
                                />
                                <InputGroup.Button>
                                    <Button title='Close' onClick={this.onHideDebitCardNameFormClick} >
                                        <Glyphicon glyph='remove-sign' />
                                    </Button>
                                    <Button title='Add' onClick={this.onAddNewDebitCardClick}>
                                        <Glyphicon glyph='ok-sign' />
                                    </Button>
                                </InputGroup.Button>
                            </InputGroup>
                        </div>
                    </div>
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
                        <FormControl
                            componentClass='textarea'
                            value={this.state.note}
                            onChange={this.onNoteChange}
                        />
                    </FormGroup>
                </Grid>
            </div >
        );
    }
}
