import React from 'react';
import PropTypes from 'prop-types';

import ReChart from './pie-rechart.jsx';
import StatusBar from '../status-bar/status-bar.jsx';

export default class PieChart extends React.PureComponent {
    static propTypes = {
        chartData: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
                value: PropTypes.number,
            }),
        ).isRequired,
        colors: PropTypes.arrayOf(PropTypes.string).isRequired,
        onGoHome: PropTypes.func.isRequired,
    };

    render() {
        return (
            <div>
                <StatusBar statusBarTitle='Current month balance chart' onDeclineButtonClick={this.props.onGoHome} />
                <div className='chart-container container content-layer'>
                    <ReChart chartData={this.props.chartData} chartColors={this.props.colors} />
                </div>
            </div>
        );
    }
}
