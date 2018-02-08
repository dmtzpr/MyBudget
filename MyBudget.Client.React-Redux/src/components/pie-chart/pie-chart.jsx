import React from 'react';
import PropTypes from 'prop-types';
import { PieChart as PieRechart, Pie, Cell, Tooltip } from 'recharts';

import StatusBar from '../status-bar/status-bar.jsx';

const data = [
    { name: 'Income', value: 400 },
    { name: 'Total', value: 300 },
    { name: 'Expenses', value: 300 },
];

const COLORS = ['#008E4C', '#FFC400', '#DE4334'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );

};

export default class PieChart extends React.PureComponent {
    static propTypes = {
        totalExpensesAmount: PropTypes.number.isRequired,
        currentMonthIncomeAmount: PropTypes.number.isRequired,
        currentMonthExpensesAmount: PropTypes.number.isRequired,
        onGoHome: PropTypes.func.isRequired,
    };


    constructor(props) {
        super(props);

        this.chartData = [
            { name: 'Income', value: props.currentMonthIncomeAmount },
            { name: 'Total', value: props.totalExpensesAmount },
            { name: 'Expenses', value: props.currentMonthExpensesAmount },
        ];
    }

    render() {
        return (
            <div>
                <StatusBar
                    statusBarTitle='Current month balance chart'
                    onDeclineButtonClick={this.props.onGoHome}
                />
                <div className='chart-container container content-layer'>
                    <PieRechart width={600} height={400}>
                        <Pie
                            data={this.chartData}
                            cx={300}
                            cy={200}
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill='#8884d8'
                            isAnimationActive={false}
                        >
                            {
                                this.chartData.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)
                            }
                        </Pie>
                        <Tooltip />
                    </PieRechart>
                </div>
            </div>
        );
    }
}
