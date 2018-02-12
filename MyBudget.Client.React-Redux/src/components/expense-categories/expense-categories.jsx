import React from 'react';
import { FormGroup, Grid, ButtonGroup, Button } from 'react-bootstrap';

import StatusBar from '../status-bar/status-bar.jsx';

export default () => (
    <div>
        <StatusBar statusBarTitle='' />
        <Grid>
            <FormGroup className='input-block'>
                <ButtonGroup justified>
                    <Button onClick={this.onDeleteExpenseCategoryClick}>Delete</Button>
                    <Button onClick={this.onAddExpenseCategoryFormClick}>Add</Button>
                </ButtonGroup>
                <ButtonGroup justified>
                    <Button onClick={this.onDeleteExpenseSubcategoryClick}>Delete</Button>
                    <Button onClick={this.onAddExpenseSubcategoryFormClick}>Add</Button>
                </ButtonGroup>
            </FormGroup>
        </Grid>
    </div>
);
