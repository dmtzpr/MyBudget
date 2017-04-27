var React = require('react'),
    ReactChart = require("react-chartjs");

var StatusBar = require('../../status-bar/jsx/status-bar'),
    CashStore = require('../../../stores/cash-store'),
    DebitCardsStore = require('../../../stores/cards-store'),
    ExpenseStore = require('../../../stores/expense-store');

var Chart = React.createClass({
    render: function () {
        var Chart = ReactChart[this.props.route.chartType],
            currentMonthExpensesAmount = ExpenseStore.getCurrentMonthExpensesAmount(),
            currentMonthIncomeAmount = CashStore.getCurrentMonthCashIncome() + DebitCardsStore.getCurrentMonthDebitCardsIncomeBalance(),
            currentMontTotalAmount = currentMonthIncomeAmount - currentMonthExpensesAmount,
            chartData = this.props.route.chartType === 'Bar' ? {
                    labels: ["Income", "Total", "Expenses"],
                    datasets: [{
                        label: "Bar chart",
                        fillColor: "rgba(151,187,205,0.5)",
                        strokeColor: "rgba(151,187,205,0.8)",
                        highlightFill: "rgba(151,187,205,0.75)",
                        highlightStroke: "rgba(151,187,205,1)",
                        data: [currentMonthIncomeAmount, currentMontTotalAmount, currentMonthExpensesAmount]
                    }
                    ]
                } : [
                    {
                        value: currentMonthIncomeAmount,
                        color: "rgba(0,142,76,1)",
                        highlight: "rgba(0,142,76,0.75)",
                        label: "Income"
                    },
                    {
                        value: currentMontTotalAmount,
                        color: "rgba(255,196,0,1)",
                        highlight: "rgba(255,196,0,0.75)",
                        label: "Total"
                    },
                    {
                        value: currentMonthExpensesAmount,
                        color: "rgba(222,67,52,1)",
                        highlight: "rgba(222,67,52,0.75)",
                        label: "Expenses"
                    }
                ],
            chartOptions = {
                tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %> $"
            };

        return (
            <div>
                <StatusBar statusBarTitle="Current month balance chart"/>
                <div className="chart-container container content-layer">
                    <Chart data={chartData} options={chartOptions} width="600" height="400"/>
                </div>
            </div>
        );
    }
});

module.exports = Chart;
