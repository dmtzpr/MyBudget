import Router from 'koa-router';
import expenseCategoryController from './controllers/expense-category-controller';
import checkUser from '../../handlers/checkUser';
import checkExpenseCategory from './handlers/check-expense-category';
import ExpenseCategory from './models/expense-category';

const router = new Router({ prefix: '/expense-category' });

router
    .get('/', checkUser(), expenseCategoryController.get)
    .post('/', checkUser(), expenseCategoryController.create)
    .param('id', checkExpenseCategory())
    .delete('/:id', checkUser(), expenseCategoryController.delete)
    .param('/subcategory/id', checkExpenseCategory())
    .post('/subcategory/:id', checkUser(), expenseCategoryController.createSubcategory)
    .patch('/subcategory/:id', checkUser(), expenseCategoryController.deleteSubcategory);

export { ExpenseCategory };

export default router.routes();
