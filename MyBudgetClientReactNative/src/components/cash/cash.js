import React from 'react';
import PropTypes from 'prop-types';
import { Text, TextInput } from 'react-native';
import { Row, Col, Grid } from 'react-native-easy-grid';
import DatePicker from 'react-native-datepicker';

import NavigationMenu from '../navigation-menu/navigation-menu';
import StatusBar from '../status-bar/status-bar';

import { centerStyle, wrapperStyle, inputBoxStyle, labelStyle } from '../../styles/common-styles';

import styles from './styles';

export default class Cash extends React.PureComponent {
    static propTypes = {
        onAddCash: PropTypes.func.isRequired,
    };

    state = {
        date: new Date().toISOString(),
        amount: 0,
        note: '',
    };

    onAddCashButtonClick = () => {
        const { date, amount, note } = this.state;

        this.props.onAddCash({
            date,
            amount,
            note,
        });
    };

    render() {
        return (
            <Grid style={wrapperStyle}>
                <StatusBar statusBarTitle='Add cash' onAcceptButtonClick={this.onAddCashButtonClick} />
                <Row>
                    <Col style={[centerStyle, styles.cashForm]}>
                        <Text style={labelStyle}>Date</Text>
                        <DatePicker
                            style={styles.datePicker}
                            date={this.state.date}
                            mode='date'
                            placeholder='select date'
                            format='YYYY-MM-DD'
                            confirmBtnText='Confirm'
                            cancelBtnText='Cancel'
                            showIcon={false}
                            customStyles={{
                                dateInput: inputBoxStyle,
                            }}
                            onDateChange={(date) => {
                                this.setState({ date });
                            }}
                        />
                        <Text style={labelStyle}>Amount</Text>
                        <TextInput
                            style={inputBoxStyle}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            keyboardType='numeric'
                            autoCorrect={false}
                            onChangeText={amount => this.setState({ amount: parseInt(amount) })}
                        />
                        <Text style={labelStyle}>Note</Text>
                        <TextInput
                            style={inputBoxStyle}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            multiline={true}
                            numberOfLines={2}
                            onChangeText={note => this.setState({ note })}
                        />
                    </Col>
                </Row>
                <NavigationMenu />
            </Grid>
        );
    }
}
