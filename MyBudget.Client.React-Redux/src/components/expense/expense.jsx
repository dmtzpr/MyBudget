import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DatePicker from 'react-16-bootstrap-date-picker';
import { Grid, Col, ControlLabel, FormGroup, FormControl, HelpBlock } from 'react-bootstrap';

import StatusBar from '../status-bar/status-bar.jsx';

import './expense.less';

export default class Expense extends React.PureComponent {
    static propTypes = {
        categories: PropTypes.array.isRequired,
        paymentTypes: PropTypes.array.isRequired,
        onAddExpense: PropTypes.func.isRequired,
    };

    state = {
        categoryId: null,
        subcategoryId: null,
        paymentTypeId: null,
        date: new Date().toISOString(),
        amount: 0,
        note: '',
    };

    onAddExpenseButtonClick = () => {
        const { categoryId, subcategoryId, paymentTypeId, amount, date, note } = this.state;

        this.props.onAddExpense({ categoryId, subcategoryId, paymentTypeId, amount, date, note });
    };

    onExpenseCategoryChange = (e) => {
        this.setState({ categoryId: parseInt(e.target.value), subcategoryId: null });
    };

    onExpenseSubcategoryChange = (e) => {
        this.setState({ subcategoryId: parseInt(e.target.value) });
    };

    onPaymentTypeChange = (e) => {
        this.setState({ paymentTypeId: parseInt(e.target.value) });
    };

    onAmountChange = (e) => {
        this.setState({ amount: parseInt(e.target.value) });
    };

    onDateChange = (value) => {
        this.setState({ date: value });
    };

    onNoteChange = (e) => {
        this.setState({ note: e.target.value });
    };

    render() {
        const { categories, paymentTypes } = this.props;
        const { categoryId, subcategoryId, paymentTypeId } = this.state;

        return (
            <div className='add-expense-component'>
                <StatusBar statusBarTitle='Add expense' onAcceptButtonClick={this.onAddExpenseButtonClick} />
                <Grid className='expense-container text-center content-layer'>
                    <Col xs={6} className='category-select'>
                        <FormGroup validationState={categoryId === 0 ? 'error' : null}>
                            <ControlLabel>Category</ControlLabel>
                            <FormControl
                                componentClass='select'
                                placeholder='-- choose category --'
                                value={categoryId}
                                onChange={this.onExpenseCategoryChange}
                            >
                                <option value='0'>-- choose category --</option>
                                {categories.map((category, index) => (
                                    <option key={index} value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </FormControl>
                            {categoryId === 0 && <HelpBlock>Please select category</HelpBlock>}
                        </FormGroup>
                    </Col>
                    {!!categoryId && (
                        <Col xs={6} className='subcategory-select'>
                            <FormGroup validationState={subcategoryId === 0 ? 'error' : null}>
                                <ControlLabel>Subcategory</ControlLabel>
                                <FormControl
                                    componentClass='select'
                                    placeholder='-- choose subcategory --'
                                    value={subcategoryId}
                                    onChange={this.onExpenseSubcategoryChange}
                                >
                                    <option value='0'>-- choose subcategory --</option>
                                    {categories
                                        .find(category => category.id === categoryId)
                                        .subcategories.map((subcategory, index) => (
                                            <option key={index} value={subcategory.id}>
                                                {subcategory.name}
                                            </option>
                                        ))}
                                </FormControl>
                                {subcategoryId === 0 && <HelpBlock>Please select subcategory</HelpBlock>}
                            </FormGroup>
                        </Col>
                    )}
                    <Link to='/expense-category' className='add-expense-category'>
                        Add expense categories
                    </Link>
                    {!!subcategoryId && (
                        <FormGroup className='input-block' validationState={paymentTypeId === 0 ? 'error' : null}>
                            <ControlLabel>Pay from</ControlLabel>
                            <FormControl
                                componentClass='select'
                                placeholder='-- choose pay from --'
                                value={paymentTypeId}
                                onChange={this.onPaymentTypeChange}
                            >
                                <option value='0'>-- choose pay from --</option>
                                {paymentTypes.map((paymentType, index) => (
                                    <option key={index} value={paymentType.id}>
                                        {`${paymentType.name} - ${paymentType.balance} $`}
                                    </option>
                                ))}
                            </FormControl>
                            {paymentTypeId === 0 && <HelpBlock>Please select pay source</HelpBlock>}
                        </FormGroup>
                    )}
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
                        <ControlLabel>Date</ControlLabel>
                        <DatePicker value={this.state.date} onChange={this.onDateChange} />
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
