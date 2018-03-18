import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, View } from 'react-native';
import { Row } from 'react-native-easy-grid';

import Header from '../header/header';
import NavigationMenu from '../navigation-menu/navigation-menu';
import LinkMenu from '../link-menu/link-menu';
import BalanceArea from '../balance-area/balance-area';

import styles from './styles';
import { centerStyle } from '../../styles/common-styles';

export default class Home extends React.PureComponent {
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
                        <LinkMenu glyph='creditCard' label='Debit cards' balance={cardsBalance} link='cards' />
                        <LinkMenu glyph='cash' label='Cash' balance={cashBalance} link='cash' />
                    </Row>
                    <Row>
                        <LinkMenu glyph='budget' label='Month budget' balance={monthBudget} link='budget' />
                        <LinkMenu
                            glyph='shoppingCart'
                            label='Available budget'
                            balance={availableBudget}
                            link='expense'
                        />
                    </Row>
                    <Row style={centerStyle}>
                        <Text style={styles.monthBalance}>Current month balance</Text>
                    </Row>
                    <Row>
                        <BalanceArea
                            color='#008E4C'
                            glyph='inboxIn'
                            label='Income'
                            balance={currentMonthIncomeAmount}
                        />
                        <BalanceArea color='#FFC400' glyph='inbox' label='Total' balance={currentMonthTotalBalance} />
                        <BalanceArea
                            color='#DE4334'
                            glyph='inboxOut'
                            label='Expenses'
                            balance={currentMonthExpensesAmount}
                        />
                    </Row>
                </ScrollView>
                <NavigationMenu />
            </View>
        );
    }
}
