var React = require('react');

var Header = require('../../header/jsx/header'),
    ContentGrid = require('../../content-grid/jsx/content-grid'),
    BudgetActions = require('../../../actions/budget-actions'),
    CashActions = require('../../../actions/cash-actions'),
    LoginStore = require('../../../stores/login-store'),
    BudgetStore = require('../../../stores/budget-store'),
    CashStore = require('../../../stores/cash-store'),
    DebitCardsStore = require('../../../stores/cards-store'),
    ExpenseStore = require('../../../stores/expense-store');

var Home = React.createClass({
    getInitialState: function () {
        return {
            userName: LoginStore.getLoggedUsername(),
            cardsBalance: DebitCardsStore.getDebitCardsBalance(),
            cashBalance: CashStore.getCashBalance(),
            monthBudget: BudgetStore.getMouthBudget(),
            totalExpensesAmount: ExpenseStore.getTotalExpensesAmount(),
            currentMonthIncomeAmount: CashStore.getCurrentMonthCashIncome() + DebitCardsStore.getCurrentMonthDebitCardsIncomeBalance(),
            currentMonthExpensesAmount: ExpenseStore.getCurrentMonthExpensesAmount()
        };
    },

    componentWillMount () {
        BudgetStore.addChangeListener(this._onChange);
        CashStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        BudgetStore.removeChangeListener(this._onChange);
        CashStore.removeChangeListener(this._onChange);
    },

    _onChange: function () {
        this.setState({
            monthBudget: BudgetStore.getMouthBudget(),
            cashBalance: CashStore.getCashBalance()
        });
    },

    componentDidMount: function () {
        BudgetActions.getMonthBudget();
        CashActions.getCashes();
    },

    render: function () {
        var state = this.state,
            balance = {
                cards: state.cardsBalance,
                cash: state.cashBalance,
                total: state.cashBalance + state.cardsBalance - state.totalExpensesAmount,
                currentMonthTotal: state.currentMonthIncomeAmount - state.currentMonthExpensesAmount
            },
            amount = {
                totalExpenses: state.totalExpensesAmount,
                currentMonthIncome: state.currentMonthIncomeAmount,
                currentMonthExpenses: state.currentMonthExpensesAmount
            };

        return (
            <div className="container">
                <Header userName={state.userName} totalBalance={balance.total}/>
                <ContentGrid balance={balance} monthBudget={state.monthBudget} amount={amount}/>
            </div>
        );
    }
});

module.exports = Home;
