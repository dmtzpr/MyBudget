var React = require('react'),
    ReactRouter = require('react-router'),
    browserHistory = ReactRouter.browserHistory,
    DateTimeField = require('react-bootstrap-datetimepicker'),
    moment = require('moment');

var StatusBar = require('../../status-bar/jsx/status-bar'),
    AppConfig = require('../../../config'),
    ExpenseActions = require('../../../actions/expense-actions'),
    ExpenseStore = require('../../../stores/expense-store'),
    CashActions = require('../../../actions/cash-actions'),
    CardsActions = require('../../../actions/cards-actions'),
    CardsStore = require('../../../stores/cards-store'),
    CashStore = require('../../../stores/cash-store');

var Expense = React.createClass({
    getInitialState: function () {
        return {
            categoryId: null,
            subcategoryId: null,
            paymentTypeId: null,
            amount: 0,
            date: moment().format(AppConfig.Date.DATE_FORMAT),
            note: '',
            isAddCategoryFormShow: false,
            isAddSubcategoryFormShow: false,
            newCategoryName: '',
            newSubcategoryName: ''
        }
    },

    _getExpenseModel: function () {
        var state = this.state;

        return {
            categoryId: state.categoryId,
            subcategoryId: state.subcategoryId,
            amount: state.amount,
            date: state.date,
            note: state.note
        }
    },

    _onAddExpenseButtonClick: function () {
        var state = this.state;

        if (state.categoryId && state.subcategoryId && state.paymentTypeId !== null && state.amount > 0) {
            if (state.paymentTypeId === 0) {
                if (CashStore.getCashBalance() >= state.amount) {
                    CashActions.addExpense();
                    this._addExpense(this._getExpenseModel());
                } else {
                    alert('too little cash balance');
                }
            } else {
                if (CardsStore.getDebitCardBlanceById(state.paymentTypeId) >= state.amount) {
                    CardsActions.addExpense(state.paymentTypeId, this._getExpenseModel());
                    this._addExpense();
                } else {
                    alert('too little balance on selected card');
                }
            }
        } else {
            alert('please select expense category or pay form');
        }
    },

    _addExpense: function () {
        ExpenseActions.addExpense(this._getExpenseModel());
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

    _onNewCategoryNameChange: function (event) {
        this.setState({newCategoryName: event.target.value});
    },

    _onNewSubcategoryNameChange: function (event) {
        this.setState({newSubcategoryName: event.target.value});
    },

    _onExpenseCategoryChange: function (event) {
        this.setState({categoryId: parseInt(event.target.value)});
    },

    _onExpenseSubcategoryChange: function (event) {
        this.setState({subcategoryId: parseInt(event.target.value)});
    },

    _onPaymentTypeChange: function (event) {
        this.setState({paymentTypeId: parseInt(event.target.value)});
    },

    _onDeleteExpenseCategoryClick: function () {
        if (this.state.categoryId) {
            ExpenseActions.deleteExpenseCategory(this.state.categoryId);
            this.setState({categoryId: 0});
        } else {
            alert('please select expense category');
        }
    },

    _onDeleteExpenseSubcategoryClick: function () {
        if (this.state.categoryId && this.state.subcategoryId) {
            ExpenseActions.deleteExpenseSubcategory(this.state.categoryId, this.state.subcategoryId);
            this.setState({categoryId: 0, subcategoryId: 0});
        } else {
            alert('please select expense category or subcategory');
        }
    },

    _onAddExpenseCategoryFormClick: function () {
        this.setState({isAddCategoryFormShow: true});
    },

    _onHideExpenseCategoryFormClick: function () {
        this.setState({
            newCategoryName: '',
            isAddCategoryFormShow: false
        });
    },

    _onAddExpenseCategoryClick: function () {
        if (this.state.newCategoryName) {
            ExpenseActions.addExpenseCategory(this.state.newCategoryName);
            this.setState({
                newCategoryName: '',
                isAddCategoryFormShow: false
            });
        }
    },

    _onAddExpenseSubcategoryClick: function () {
        if (this.state.categoryId && this.state.newSubcategoryName) {
            ExpenseActions.addExpenseSubcategory(this.state.categoryId, this.state.newSubcategoryName);
            this.setState({
                newSubcategoryName: '',
                isAddSubcategoryFormShow: false
            });
        }
    },

    _onAddExpenseSubcategoryFormClick: function () {
        if (this.state.categoryId) {
            this.setState({isAddSubcategoryFormShow: true});
        }
    },

    _onHideExpenseSubcategoryFormClick: function () {
        this.setState({
            newSubcategoryName: '',
            isAddSubcategoryFormShow: false
        });
    },

    render: function () {
        var categories = ExpenseStore.getCategories(),
            subcategories = ExpenseStore.getSubcategories(this.state.categoryId),
            paymentTypes = CardsStore.getEachDebitCardBalance();

        paymentTypes.push(CashStore.getCashBalanceModel());

        return (
            <div>
                <StatusBar statusBarTitle="Add expense"
                           okButtonClick={this._onAddExpenseButtonClick}/>
                <div className="expense-container container text-center content-layer">
                    <div className="input-block">
                        <p className="pull-left">Category</p>
                        <p className="pull-right">Subcategory</p>
                        <select className="form-control pull-left"
                                value={this.state.categoryId}
                                onChange={this._onExpenseCategoryChange}>
                            <option value="">-- choose category --</option>
                            {categories.map(function (category, index) {
                                return <option key={index} value={category.id}>{category.name}</option>
                            })}
                        </select>
                        <select className="form-control pull-right"
                                value={this.state.subcategoryId}
                                onChange={this._onExpenseSubcategoryChange}>
                            <option value="">-- choose subcategory --</option>
                            {subcategories.map(function (subcategory, index) {
                                return <option key={index} value={subcategory.id}>{subcategory.name}</option>
                            })}
                        </select>
                    </div>
                    <div className="input-block">
                        <div className="btn-group pull-left" role="group">
                            <button type="button" className="btn btn-default"
                                    onClick={this._onDeleteExpenseCategoryClick}>
                                Delete
                            </button>
                            <button type="button" className="btn btn-default"
                                    onClick={this._onAddExpenseCategoryFormClick}>Add
                            </button>
                        </div>
                        <div className="btn-group pull-right btn-group-justified" role="group">
                            <button type="button" className="btn btn-default"
                                    onClick={this._onDeleteExpenseSubcategoryClick}>
                                Delete
                            </button>
                            <button type="button" className="btn btn-default"
                                    onClick={this._onAddExpenseSubcategoryFormClick}>Add
                            </button>
                        </div>
                    </div>
                    <div
                        className={this.state.isAddCategoryFormShow || this.state.isAddSubcategoryFormShow ? 'show' : 'hidden'}>
                        <div className="input-block">
                            <div className={this.state.isAddCategoryFormShow ? 'show' : 'hidden'}>
                                <div className="input-group pull-left">
                                    <input type="text" className="form-control" placeholder="Input new category name"
                                           value={this.state.newCategoryName}
                                           onChange={this._onNewCategoryNameChange}/>
                                    <div className="input-group-btn">
                                        <button type="button" className="btn btn-default" title="Close"
                                                onClick={this._onHideExpenseCategoryFormClick}>
                                            <i className="fa fa-times-circle"></i>
                                        </button>
                                        <button type="button" className="btn btn-default" title="Add"
                                                onClick={this._onAddExpenseCategoryClick}>
                                            <i className="fa fa-check-circle"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className={this.state.isAddSubcategoryFormShow ? 'show' : 'hidden'}>
                                <div className="input-group pull-right">
                                    <input type="text" className="form-control" placeholder="Input new subcategory name"
                                           value={this.state.newSubcategoryName}
                                           onChange={this._onNewSubcategoryNameChange}/>
                                    <div className="input-group-btn">
                                        <button type="button" className="btn btn-default" title="Close"
                                                onClick={this._onHideExpenseSubcategoryFormClick}>
                                            <i className="fa fa-times-circle"></i>
                                        </button>
                                        <button type="button" className="btn btn-default" title="Add"
                                                onClick={this._onAddExpenseSubcategoryClick}>
                                            <i className="fa fa-check-circle"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                        <p>Pay from</p>
                        <select className="form-control"
                                value={this.state.paymentTypeId}
                                onChange={this._onPaymentTypeChange}>
                            <option value="">-- choose pay from --</option>
                            {paymentTypes.map(function (paymentType, index) {
                                return <option key={index}
                                               value={paymentType.id}>{paymentType.name + ' - ' + paymentType.balance + ' $'}</option>
                            })}
                        </select>
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

module.exports = Expense;
