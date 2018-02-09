import React from 'react';
import PropTypes from 'prop-types';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill='white' textAnchor={x > cx ? 'start' : 'end'} dominantBaseline='central'>
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

export default class PieReChart extends React.PureComponent {
    static propTypes = {
        chartData: PropTypes.array.isRequired,
        chartColors: PropTypes.array.isRequired,
    };

    render() {
        const { chartData, chartColors } = this.props;

        return (
            <PieChart width={600} height={400}>
                <Pie
                    data={chartData}
                    cx={300}
                    cy={200}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill='#8884d8'
                    isAnimationActive={false}
                >
                    {this.props.chartData.map((entry, index) => (
                        <Cell fill={chartColors[index % chartColors.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        );
    }
}
