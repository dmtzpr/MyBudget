import React from 'react';
import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default class BarReChart extends React.PureComponent {
    static propTypes = {
        chartData: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
                value: PropTypes.number,
            }),
        ).isRequired,
        chartColors: PropTypes.arrayOf(PropTypes.string).isRequired,
    };

    render() {
        return (
            <BarChart
                width={600}
                height={400}
                data={this.props.chartData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
                <XAxis dataKey='name' />
                <YAxis />
                <CartesianGrid strokeDasharray='3 3' />
                <Tooltip />
                <Legend />
                {this.props.chartData.map((entry, index) => (
                    <Bar dataKey={entry.name} fill={this.props.chartColors[index % this.props.chartColors.length]} />
                ))}
            </BarChart>
        );
    }
}
