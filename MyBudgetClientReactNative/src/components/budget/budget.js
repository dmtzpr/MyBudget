import React from 'react';
import PropTypes from 'prop-types';
import { Text, TextInput } from 'react-native';
import { Row, Col, Grid } from 'react-native-easy-grid';

import NavigationMenu from '../navigation-menu/navigation-menu';
import StatusBar from '../status-bar/status-bar';

import { centerStyle, wrapperStyle, inputBoxStyle, labelStyle } from '../../styles/common-styles';

import styles from './styles';

export default class Budget extends React.PureComponent {
    static propTypes = {
        monthBudget: PropTypes.number.isRequired,
        onMonthBudgetChange: PropTypes.func.isRequired,
    };

    state = {
        monthBudget: this.props.monthBudget,
    };

    onSetMonthBudgetButtonClick = () => this.props.onMonthBudgetChange(this.state.monthBudget);

    render() {
        const { monthBudget } = this.state;
        return (
            <Grid style={wrapperStyle}>
                <StatusBar statusBarTitle='Budget' onAcceptButtonClick={this.onSetMonthBudgetButtonClick} />
                <Row>
                    <Col style={[centerStyle, styles.budgetForm]}>
                        <Text style={labelStyle}>Month budget: {monthBudget} $</Text>
                        <TextInput
                            style={inputBoxStyle}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder='Month budget'
                            returnKeyType='go'
                            keyboardType='numeric'
                            placeholderTextColor='#999'
                            autoCorrect={false}
                            onSubmitEditing={this.onSetMonthBudgetButtonClick}
                            onChangeText={budget => this.setState({ monthBudget: parseInt(budget) })}
                            value={`${monthBudget}`}
                        />
                    </Col>
                </Row>
                <NavigationMenu />
            </Grid>
        );
    }
}
