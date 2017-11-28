import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row } from 'react-bootstrap';

import LinkMenu from '../link-menu/link-menu.jsx';
import BalanceArea from '../balance-area/balance-area.jsx';

import './home.less';

class Home extends React.PureComponent {
    constructor(props) {
        super();
    }

    render() {
        return (
            <Grid>
                {/* <Header userName={state.userName} totalBalance={totalBalance} /> */}
                <div className='content-layer'>
                    <Row className='show-grid'>
                        <LinkMenu name='credit-card-area' glyph='credit-card' label='Debit cards' balance={23} link='/cards' />
                        <LinkMenu name='cash-area' glyph='money' label='Cash' balance={23} link='/cash' />
                    </Row>
                    <Row className='show-grid'>
                        <LinkMenu name='budget-area' glyph='folder' label='Budget' balance={23} link='/budget' />
                        <LinkMenu name='expenses-area' glyph='shopping-cart' label='Expenses' balance={23} link='/expense' />
                    </Row>
                    <Row className='row show-grid'>
                        <h4 className='text-center'>Current month balance</h4>
                    </Row>
                    <Row className='show-grid month-balance-area'>
                        <BalanceArea name='month-income-area' label='Income' balance={100} />
                        <BalanceArea name='month-total-area' label='Total' balance={102} />
                        <BalanceArea name='month-expenses-area' label='Expenses' balance={103} />
                    </Row>
                </div>
            </Grid>
        );
    }
}


export default Home;
