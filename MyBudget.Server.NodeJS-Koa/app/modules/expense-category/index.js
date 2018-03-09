import Router from 'koa-router';
import expenseCategoryController from './controllers/expense-category-controller';
import checkExpenseCategory from './handlers/check-expense-category';
import ExpenseCategory from './models/expense-category';

const router = new Router({ prefix: '/expense-category' });

router
    .get('/', expenseCategoryController.get)
    .post('/', expenseCategoryController.create)
    .param('id', checkExpenseCategory())
    .delete('/:id', expenseCategoryController.delete)
    .param('/subcategory/id', checkExpenseCategory())
    .post('/subcategory/:id', expenseCategoryController.createSubcategory)
    .patch('/subcategory/:id', expenseCategoryController.deleteSubcategory);

export { ExpenseCategory };

export default router.routes();
