import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'react-bootstrap';

import ReChart from './bar-rechart.jsx';
import StatusBar from '../status-bar/status-bar.jsx';

import './chart.less';

export default class PieChart extends React.PureComponent {
    static propTypes = {
        chartData: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
                value: PropTypes.number,
            }),
        ).isRequired,
        chartColors: PropTypes.arrayOf(PropTypes.string).isRequired
    };

    render() {
        return (
            <div>
                <StatusBar statusBarTitle='Current month balance chart' />
                <Grid className='chart-container container content-layer'>
                    <ReChart chartData={this.props.chartData} chartColors={this.props.chartColors} />
                </Grid>
            </div>
        );
    }
}
