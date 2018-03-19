import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, ButtonGroup, Button } from 'react-bootstrap';

import StatusBar from '../status-bar/status-bar.jsx';

import './settings.less';

export default () => (
    <div>
        <StatusBar statusBarTitle='Settings' />
        <Grid className='settings-container'>
            <ButtonGroup vertical block>
                <Button>
                    <Link to='/login'>Logout</Link>
                </Button>
                <Button>
                    <Link to='/expense-category'>Add expense categories</Link>
                </Button>
                <Button>
                    <Link to='/'>Go home</Link>
                </Button>
            </ButtonGroup>
        </Grid>
    </div>
);
