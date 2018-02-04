import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


import './chart.less';

export default class Chart extends React.PureComponent {
    static propTypes = {
    
    };

    state = {

    }

    render() {
        return <div>
            <StatusBar statusBarTitle="Current month balance chart" />
            <div className="chart-container container content-layer">
                <Chart data={chartData} options={chartOptions} width="600" height="400" />
                <BarChart width={600} height={400} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </div>
        </div>
    }
}