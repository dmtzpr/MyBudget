var React = require('react'),
    Link = require('react-router').Link;

var Header = require('../../header/jsx/header'),
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
        var self = this,
            state = self.state,
            totalBalance = state.cashBalance + state.cardsBalance - state.totalExpensesAmount,
            currentMonthTotalBalance = state.currentMonthIncomeAmount - state.currentMonthExpensesAmount;

        return (
            <div className="container">
                <Header userName={state.userName} totalBalance={totalBalance}/>
                <div className="content-layer">
                    <div className="row show-grid ">
                        <div className="col-xs-6 credit-card-area">
                            <div className="area-icon">
                                <i className="fa fa-credit-card fa-3x fa-fw"></i>
                            </div>
                            <div className="area-info">
                                <div>Debit cards</div>
                                <div>{state.cardsBalance} $</div>
                            </div>
                            <div className="area-button">
                                <Link to="/cards"><i className="fa fa-chevron-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-xs-6 cash-area">
                            <div className="area-icon">
                                <i className="fa fa-money fa-3x fa-fw"></i>
                            </div>
                            <div className="area-info">
                                <div>Cash</div>
                                <div>{state.cashBalance} $</div>
                            </div>
                            <div className="area-button">
                                <Link to="/cash"><i className="fa fa-chevron-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="row show-grid">
                        <div className="col-xs-6 budget-area">
                            <div className="area-icon">
                                <i className="fa fa-folder fa-3x fa-fw"></i>
                            </div>
                            <div className="area-info">
                                <div>Budget</div>
                                <div>{state.monthBudget} $</div>
                            </div>
                            <div className="area-button">
                                <Link to="/budget"><i className="fa fa-chevron-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-xs-6 expenses-area">
                            <div className="area-icon">
                                <i className="fa fa-shopping-cart fa-3x fa-fw"></i>
                            </div>
                            <div className="area-info">
                                <div>Expenses</div>
                                <div>{state.totalExpensesAmount} $</div>
                            </div>
                            <div className="area-button">
                                <Link to="/expense"><i className="fa fa-chevron-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="row show-grid">
                        <h4 className="text-center">Current month balance</h4>
                    </div>
                    <div className="row show-grid month-balance-area">
                        <div className="col-xs-4 month-income-area">
                            <div className="area-info">
                                <div>Income</div>
                                <div>{state.currentMonthIncomeAmount} $</div>
                            </div>
                        </div>
                        <div className="col-xs-4 month-total-area">
                            <div className="area-info">
                                <div>Total</div>
                                <div>{currentMonthTotalBalance} $
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-4 month-expenses-area">
                            <div className="area-info">
                                <div>Expenses</div>
                                <div>{state.currentMonthExpensesAmount} $</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Home;
