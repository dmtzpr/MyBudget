import ActionTypes from '../constants/expenses';

const initialState = [{
    id: 1,
    name: 'Food',
    subcategories: [{
        id: 1,
        name: 'Groceries',
    },
    {
        id: 2,
        name: 'Restaurants',
    },
    {
        id: 3,
        name: 'Pet Food/Treats',
    }],
}, {
    id: 2,
    name: 'Shelter',
    subcategories: [{
        id: 1,
        name: 'Mortgage',
    },
    {
        id: 2,
        name: 'Rent',
    },
    {
        id: 3,
        name: 'Property Taxes',
    }, {
        id: 4,
        name: 'Household Repairs',
    },
    {
        id: 5,
        name: 'HOA Dues',
    }],
}, {
    id: 3,
    name: 'Utilities',
    subcategories: [{
        id: 1,
        name: 'Electricity',
    },
    {
        id: 2,
        name: 'Water',
    },
    {
        id: 3,
        name: 'Heating',
    }, {
        id: 4,
        name: 'Garbage',
    },
    {
        id: 5,
        name: 'Phones',
    },
    {
        id: 6,
        name: 'Cable',
    },
    {
        id: 7,
        name: 'Internet',
    }],
}, {
    id: 4,
    name: 'Clothing',
    subcategories: [{
        id: 1,
        name: 'Children Clothing',
    },
    {
        id: 2,
        name: 'Adult Clothing',
    }],
}, {
    id: 5,
    name: 'Transportation',
    subcategories: [{
        id: 1,
        name: 'Fuel',
    },
    {
        id: 2,
        name: 'Tires',
    },
    {
        id: 3,
        name: 'Oil Changes',
    }, {
        id: 4,
        name: 'Maintenance',
    },
    {
        id: 5,
        name: 'Parking Fees',
    },
    {
        id: 6,
        name: 'Repairs',
    }],
}, {
    id: 6,
    name: 'Medical',
    subcategories: [{
        id: 1,
        name: 'Primary Care',
    },
    {
        id: 2,
        name: 'Dental Care',
    },
    {
        id: 3,
        name: 'Specialty Care',
    }, {
        id: 4,
        name: 'Medications',
    },
    {
        id: 5,
        name: 'Medical Devices',
    }],
}];

export default function expenses(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.ADD_EXPENSE_CATEGORY:
            return [
                ...state, {
                    id: state.reduce((maxId, category) => Math.max(category.id, maxId), -1) + 1,
                    name: action.name,
                    subcategories: [],
                },
            ];
        case ActionTypes.ADD_EXPENSE_SUBCATEGORY:
            return state.map(category =>
                (category.id === action.id ? {
                    ...category,
                    subcategories: [
                        ...category.subcategories, {
                            id: category.subcategories.reduce((maxId, subcategory) =>
                                Math.max(subcategory.id, maxId), -1) + 1,
                            name: action.name,
                        },
                    ],
                } : category),
            );
        case ActionTypes.DELETE_EXPENSE_CATEGORY:
            return state.filter(category =>
                category.id !== action.id,
            );
        case ActionTypes.DELETE_EXPENSE_SUBCATEGORY:
            return state.map(category =>
                (category.id === action.id ? {
                    ...category,
                    subcategories: category.subcategories.filter(subcategory =>
                        subcategory.id !== action.subcategoryId,
                    ),
                } : category),
            );
        default:
            return state;
    }
}
