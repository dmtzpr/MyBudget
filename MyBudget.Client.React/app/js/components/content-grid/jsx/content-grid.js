var React = require('react'),
    ReactPropTypes = React.PropTypes,
    Link = require('react-router').Link;

var ContentGrid = React.createClass({
    propTypes: {
        balance: ReactPropTypes.object.isRequired,
        monthBudget: ReactPropTypes.number.isRequired,
        amount: ReactPropTypes.object.isRequired
    },

    render: function () {
        var balance = this.props.balance,
            monthBudget = this.props.monthBudget,
            amount = this.props.amount;

        return (<div className="content-layer">
                <div className="row show-grid ">
                    <div className="col-xs-6 credit-card-area">
                        <div className="area-icon">
                            <i className="fa fa-credit-card fa-3x fa-fw"></i>
                        </div>
                        <div className="area-info">
                            <div>Debit cards</div>
                            <div>{balance.cards} $</div>
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
                            <div>{balance.cash} $</div>
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
                            <div>{monthBudget} $</div>
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
                            <div>{amount.totalExpenses} $</div>
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
                            <div>{amount.currentMonthIncome} $</div>
                        </div>
                    </div>
                    <div className="col-xs-4 month-total-area">
                        <div className="area-info">
                            <div>Total</div>
                            <div>{balance.currentMonthTotal} $
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-4 month-expenses-area">
                        <div className="area-info">
                            <div>Expenses</div>
                            <div>{amount.currentMonthExpenses} $</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ContentGrid;
