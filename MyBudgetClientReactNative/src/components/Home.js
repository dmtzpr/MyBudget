import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput, TouchableOpacity, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';

import LogoPanel from './LogoPanel';
import Header from './Header';
import FooterPanel from './FooterPanel';
import LinkMenu from './LinkMenu';
import BalanceArea from './BalanceArea';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#e7db63',
    },

    content: {
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 50,
    },

    signInForm: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },

    inputBox: {
        width: 300,
        backgroundColor: '#fff',
        borderRadius: 6,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#333',
        borderWidth: 1,
        borderColor: '#ccc',
    },

    emptyTopBorderRadius: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
    },

    emptyBottomBorderRadius: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },

    signInButton: {
        width: 300,
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderRadius: 6,
        marginVertical: 10,
        paddingVertical: 10,
    },
    signInButtonText: {
        fontSize: 18,
        fontWeight: '400',
        color: '#333',
        textAlign: 'center',
    },
    signUpButton: {
        width: 300,
    },

    signUpButtonText: {
        color: '#337ab7',
        textAlign: 'right',
        paddingHorizontal: 10,
    },
});

export default class Home extends Component {
    static propTypes = {
        userName: PropTypes.string.isRequired,
        cardsBalance: PropTypes.number.isRequired,
        cashBalance: PropTypes.number.isRequired,
        monthBudget: PropTypes.number.isRequired,
        currentMonthIncomeAmount: PropTypes.number.isRequired,
        currentMonthExpensesAmount: PropTypes.number.isRequired,
    };

    render() {
        const {
            userName,
            cardsBalance,
            cashBalance,
            monthBudget,
            currentMonthIncomeAmount,
            currentMonthExpensesAmount,
        } = this.props;
        const totalBalance = cashBalance + cardsBalance;
        const availableBudget = monthBudget - currentMonthExpensesAmount;
        const currentMonthTotalBalance = currentMonthIncomeAmount - currentMonthExpensesAmount;

        return (
            <View style={styles.container}>
                <ScrollView>
                    <Header userName={userName} totalBalance={totalBalance} />
                    <Row>
                        <LinkMenu
                            name='credit-card-area'
                            glyph='credit-card'
                            label='Debit cards'
                            balance={cardsBalance}
                            link='/cards'
                        />
                        <LinkMenu name='cash-area' glyph='briefcase' label='Cash' balance={cashBalance} link='/cash' />
                    </Row>
                    <Row>
                        <LinkMenu
                            name='budget-area'
                            glyph='folder-open'
                            label='Month budget'
                            balance={monthBudget}
                            link='/budget'
                        />
                        <LinkMenu
                            name='expenses-area'
                            glyph='shopping-cart'
                            label='Available budget'
                            balance={availableBudget}
                            link='/expense'
                        />
                    </Row>
                    <Row
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Text>Current month balance</Text>
                    </Row>
                    <Row className='show-grid month-balance-area'>
                        <BalanceArea color='#008E4C' glyph='log-in' label='Income' balance={currentMonthIncomeAmount} />
                        <BalanceArea
                            color='#FFC400'
                            glyph='transfer'
                            label='Total'
                            balance={currentMonthTotalBalance}
                        />
                        <BalanceArea
                            color='#DE4334'
                            glyph='log-out'
                            label='Expenses'
                            balance={currentMonthExpensesAmount}
                        />
                    </Row>
                </ScrollView>
            </View>
        );
    }
}
