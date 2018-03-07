import Router from 'koa-router';
import expenseController from './controllers/expense-controller';
import checkUser from '../../handlers/checkUser';
import Expense from './models/expense';

const router = new Router({ prefix: '/expense' });

router.get('/', checkUser(), expenseController.get).post('/', checkUser(), expenseController.create);

export { Expense };

export default router.routes();
