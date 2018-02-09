import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row } from 'react-bootstrap';

import Header from '../header/header.jsx';
import LinkMenu from '../link-menu/link-menu.jsx';
import BalanceArea from '../balance-area/balance-area.jsx';

import './home.less';

export default class Home extends React.PureComponent {
    static propTypes = {
        userName: PropTypes.string.isRequired,
        cardsBalance: PropTypes.number.isRequired,
        cashBalance: PropTypes.number.isRequired,
        monthBudget: PropTypes.number.isRequired,
        totalExpensesAmount: PropTypes.number.isRequired,
        currentMonthIncomeAmount: PropTypes.number.isRequired,
        currentMonthExpensesAmount: PropTypes.number.isRequired,
    };

    render() {
        const totalBalance = this.props.cashBalance + this.props.cardsBalance;
        const availableBudget = this.props.monthBudget - this.props.currentMonthExpensesAmount;
        const currentMonthTotalBalance = this.props.currentMonthIncomeAmount - this.props.currentMonthExpensesAmount;

        return (
            <Grid>
                <Header userName={this.props.userName} totalBalance={totalBalance} />
                <div className='content-layer'>
                    <Row className='show-grid'>
                        <LinkMenu
                            name='credit-card-area'
                            glyph='credit-card'
                            label='Debit cards'
                            balance={this.props.cardsBalance}
                            link='/cards'
                        />
                        <LinkMenu
                            name='cash-area'
                            glyph='briefcase'
                            label='Cash'
                            balance={this.props.cashBalance}
                            link='/cash'
                        />
                    </Row>
                    <Row className='show-grid'>
                        <LinkMenu
                            name='budget-area'
                            glyph='folder-open'
                            label='Month budget'
                            balance={this.props.monthBudget}
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
                    <Row className='show-grid'>
                        <h4 className='text-center'>Current month balance</h4>
                    </Row>
                    <Row className='show-grid month-balance-area'>
                        <BalanceArea
                            name='month-income-area'
                            glyph='log-in'
                            label='Income'
                            balance={this.props.currentMonthIncomeAmount}
                        />
                        <BalanceArea
                            name='month-total-area'
                            glyph='transfer'
                            label='Total'
                            balance={currentMonthTotalBalance}
                        />
                        <BalanceArea
                            name='month-expenses-area'
                            glyph='log-out'
                            label='Expenses'
                            balance={this.props.currentMonthExpensesAmount}
                        />
                    </Row>
                </div>
            </Grid>
        );
    }
}
