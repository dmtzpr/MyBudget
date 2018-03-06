import React from 'react';
import PropTypes from 'prop-types';
import {
    Grid,
    Col,
    ControlLabel,
    FormGroup,
    FormControl,
    HelpBlock,
    ButtonGroup,
    Button,
    InputGroup,
    Glyphicon,
} from 'react-bootstrap';

import StatusBar from '../status-bar/status-bar.jsx';

import './expense-category.less';

export default class ExpenseCategory extends React.PureComponent {
    static propTypes = {
        categories: PropTypes.array.isRequired,
        onDeleteExpenseCategory: PropTypes.func.isRequired,
        onAddExpenseCategory: PropTypes.func.isRequired,
        onDeleteExpenseSubcategory: PropTypes.func.isRequired,
        onAddExpenseSubcategory: PropTypes.func.isRequired,
    };

    state = {
        categoryId: null,
        subcategoryId: null,
        newCategoryName: '',
        newSubcategoryName: '',
        isAddCategoryFormShow: false,
        isAddSubcategoryFormShow: false,
    };

    onExpenseCategoryChange = (e) => {
        this.setState({
            categoryId: e.target.value,
            subcategoryId: null,
            isAddSubcategoryFormShow: false,
            newSubcategoryName: '',
        });
    };

    onExpenseSubcategoryChange = (e) => {
        this.setState({ subcategoryId: e.target.value });
    };

    onNewCategoryNameChange = (e) => {
        this.setState({ newCategoryName: e.target.value });
    };

    onNewSubcategoryNameChange = (e) => {
        this.setState({ newSubcategoryName: e.target.value });
    };

    onDeleteExpenseCategoryClick = () => {
        if (this.state.categoryId === null) {
            this.setState({ categoryId: 0 });
        } else {
            this.props.onDeleteExpenseCategory(this.state.categoryId);
            this.setState({ categoryId: null });
        }
    };

    onShowExpenseCategoryClick = () => {
        this.setState({ isAddCategoryFormShow: true });
    };

    onHideExpenseCategoryClick = () => {
        this.setState({ isAddCategoryFormShow: false });
    };

    onAddExpenseCategoryClick = () => {
        this.props.onAddExpenseCategory(this.state.newCategoryName);
        this.setState({ isAddCategoryFormShow: false, newCategoryName: '' });
    };

    onDeleteExpenseSubcategoryClick = () => {
        if (this.state.subcategoryId === null) {
            this.setState({ subcategoryId: 0 });
        } else {
            this.props.onDeleteExpenseSubcategory({
                id: this.state.categoryId,
                subcategoryId: this.state.subcategoryId,
            });
        }
    };

    onShowExpenseSubcategoryClick = () => {
        this.setState({ isAddSubcategoryFormShow: true });
    };

    onHideExpenseSubcategoryClick = () => {
        this.setState({ isAddSubcategoryFormShow: false });
    };

    onAddExpenseSubcategoryClick = () => {
        this.props.onAddExpenseSubcategory({
            categoryId: this.state.categoryId,
            newSubcategoryName: this.state.newSubcategoryName,
        });
        this.setState({ isAddSubcategoryFormShow: false, newSubcategoryName: '' });
    };

    render() {
        const { categories } = this.props;
        const {
            categoryId,
            subcategoryId,
            newCategoryName,
            newSubcategoryName,
            isAddCategoryFormShow,
            isAddSubcategoryFormShow,
        } = this.state;

        return (
            <div className='expense-category-component'>
                <StatusBar statusBarTitle='Expense categories' />
                <Grid className='expense-container text-center content-layer'>
                    <Col xs={6} className='category-select'>
                        <FormGroup validationState={categoryId === 0 ? 'error' : null}>
                            <ControlLabel>Category</ControlLabel>
                            <FormControl
                                componentClass='select'
                                placeholder='-- choose category --'
                                value={categoryId}
                                onChange={this.onExpenseCategoryChange}
                            >
                                <option value='0'>-- choose category --</option>
                                {categories.map((category, index) => (
                                    <option key={index} value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </FormControl>
                            {categoryId === 0 && <HelpBlock>Please select category</HelpBlock>}
                        </FormGroup>
                        <ButtonGroup>
                            <Button onClick={this.onDeleteExpenseCategoryClick}>Delete</Button>
                            <Button onClick={this.onShowExpenseCategoryClick}>Add</Button>
                        </ButtonGroup>
                        {isAddCategoryFormShow && (
                            <FormGroup className='add-category-form'>
                                <InputGroup>
                                    <FormControl
                                        type='text'
                                        placeholder='Input new category name'
                                        value={newCategoryName}
                                        onChange={this.onNewCategoryNameChange}
                                    />
                                    <InputGroup.Button>
                                        <Button onClick={this.onAddExpenseCategoryClick}>
                                            <Glyphicon glyph='ok-circle' />
                                        </Button>
                                        <Button onClick={this.onHideExpenseCategoryClick}>
                                            <Glyphicon glyph='remove-circle' />
                                        </Button>
                                    </InputGroup.Button>
                                </InputGroup>
                            </FormGroup>
                        )}
                    </Col>
                    {!!categoryId && (
                        <Col xs={6} className='subcategory-select'>
                            <FormGroup validationState={subcategoryId === 0 ? 'error' : null}>
                                <ControlLabel>Subcategory</ControlLabel>
                                <FormControl
                                    componentClass='select'
                                    placeholder='-- choose subcategory --'
                                    value={subcategoryId}
                                    onChange={this.onExpenseSubcategoryChange}
                                >
                                    <option value='0'>-- choose subcategory --</option>
                                    {categories
                                        .find(category => category.id === categoryId)
                                        .subcategories.map((subcategory, index) => (
                                            <option key={index} value={subcategory.id}>
                                                {subcategory.name}
                                            </option>
                                        ))}
                                </FormControl>
                                {subcategoryId === 0 && <HelpBlock>Please select subcategory</HelpBlock>}
                            </FormGroup>
                            <ButtonGroup>
                                <Button onClick={this.onDeleteExpenseSubcategoryClick}>Delete</Button>
                                <Button onClick={this.onShowExpenseSubcategoryClick}>Add</Button>
                            </ButtonGroup>
                            {isAddSubcategoryFormShow && (
                                <FormGroup className='add-subcategory-form'>
                                    <InputGroup>
                                        <FormControl
                                            type='text'
                                            placeholder='Input new subcategory name'
                                            value={newSubcategoryName}
                                            onChange={this.onNewSubcategoryNameChange}
                                        />
                                        <InputGroup.Button>
                                            <Button onClick={this.onAddExpenseSubcategoryClick}>
                                                <Glyphicon glyph='ok-circle' />
                                            </Button>
                                            <Button onClick={this.onHideExpenseSubcategoryClick}>
                                                <Glyphicon glyph='remove-circle' />
                                            </Button>
                                        </InputGroup.Button>
                                    </InputGroup>
                                </FormGroup>
                            )}
                        </Col>
                    )}
                </Grid>
            </div>
        );
    }
}
