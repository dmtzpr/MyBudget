import Router from 'koa-router';
import expenseController from './controllers/expense-controller';
import Expense from './models/expense';

const router = new Router({ prefix: '/expense' });

router.get('/', expenseController.get).post('/', expenseController.create);

export { Expense };

export default router.routes();
