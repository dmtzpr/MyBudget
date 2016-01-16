'use strict';

app.factory('expenseService', function () {

    var expensesCollection = [
      {
          categoryId: 4,
          subcategoryId: 2,
          amount: 100,
          date: '18.05.2015',
          note: 'is bought adult clothing'
      },
      {
          categoryId: 2,
          subcategoryId: 3,
          amount: 250,
          date: '18.05.2015',
          note: '250$'
      },
        {
            categoryId: 3,
            subcategoryId: 1,
            amount: 295,
            date: '18.05.2015',
            note: '295$'
        }
    ],
        categories = [{
            id: 1,
            name: 'Food',
            subcategories: [{
                id: 1,
                name: 'Groceries'
            },
                {
                    id: 2,
                    name: 'Restaurants'
                },
                {
                    id: 3,
                    name: 'Pet Food/Treats'
                }]
        }, {
            id: 2,
            name: 'Shelter',
            subcategories: [{
                id: 1,
                name: 'Mortgage'
            },
                {
                    id: 2,
                    name: 'Rent'
                },
                {
                    id: 3,
                    name: 'Property Taxes'
                }, {
                    id: 4,
                    name: 'Household Repairs'
                },
                {
                    id: 5,
                    name: 'HOA Dues'
                }]
        },
        {
            id: 3,
            name: 'Utilities',
            subcategories: [{
                id: 1,
                name: 'Electricity'
            },
                {
                    id: 2,
                    name: 'Water'
                },
                {
                    id: 3,
                    name: 'Heating'
                }, {
                    id: 4,
                    name: 'Garbage'
                },
                {
                    id: 5,
                    name: 'Phones'
                },
                {
                    id: 6,
                    name: 'Cable'
                },
                {
                    id: 7,
                    name: 'Internet'
                }]
        },
        {
            id: 4,
            name: 'Clothing',
            subcategories: [{
                id: 1,
                name: 'Children Clothing'
            },
                {
                    id: 2,
                    name: 'Adult Clothing'
                }]
        },
        {
            id: 5,
            name: 'Transportation',
            subcategories: [{
                id: 1,
                name: 'Fuel'
            },
                {
                    id: 2,
                    name: 'Tires'
                },
                {
                    id: 3,
                    name: 'Oil Changes'
                }, {
                    id: 4,
                    name: 'Maintenance'
                },
                {
                    id: 5,
                    name: 'Parking Fees'
                },
                {
                    id: 6,
                    name: 'Repairs'
                }]
        },
        {
            id: 6,
            name: 'Medical',
            subcategories: [{
                id: 1,
                name: 'Primary Care'
            },
                {
                    id: 2,
                    name: 'Dental Care'
                },
                {
                    id: 3,
                    name: 'Specialty Care'
                }, {
                    id: 4,
                    name: 'Medications'
                },
                {
                    id: 5,
                    name: 'Medical Devices'
                }]
        }];

    return {
        getExpenses: function () {
            //$http.get('mock-users-data/expenses.js')
            return expensesCollection;
        },

        getCategories: function () {
            //$http.get('mock-users-data/expenseCategories.js');
            return categories;
        },

        getSubcategories: function (categoryId) {
            var subcategories = categories.filter(function (category) {
                return category.id === categoryId;
            })[0].subcategories;

            return subcategories;
        },

        deleteCategory: function (categoryId) {
            var i = categories.length;

            while (i--) {
                if (categories[i].id === categoryId) {
                    categories.splice(i, 1);
                    break;
                }
            }
        },

        deleteSubcategory: function (categoryId, subcategoryId) {
            var i = categories.length,
                j;

            while (i--) {
                if (categories[i].id === categoryId) {
                    j = categories[i].subcategories.length;
                    while (j--) {
                        if (categories[i].subcategories[j].id === subcategoryId) {
                            categories[i].subcategories.splice(j, 1);
                            break;
                        }
                    }
                    break;
                }
            }
        },

        addExpense: function (expenseModel) {
            expensesCollection.push(expenseModel);
        },

        getTotalExpensesAmount: function () {
            var totalAmount = 0;

            expensesCollection.forEach(function (expenseModel) {
                totalAmount += expenseModel.amount;
            });

            return totalAmount;
        },

        addCategory: function (categoryName) {
            categories.push({
                id: +Date.now(),
                name: categoryName,
                subcategories: []
            });
        },

        addSubcategory: function (categoryId, subcategoryName) {
            categories.filter(function (category) {
                return category.id === categoryId;
            })[0].subcategories.push({
                id: +Date.now(),
                name: subcategoryName
            });
        },

        getCategoryName: function (categoryId) {
            return categories.filter(function (category) {
                return category.id === categoryId;
            })[0].name;
        },

        getCurrentMonthExpensesAmount: function () {
            var totalAmount = 0;

            expensesCollection.forEach(function (expenseModel) {
                totalAmount += expenseModel.amount;
            });

            return totalAmount;
        }
    };
});
