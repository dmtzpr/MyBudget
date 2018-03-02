import Router from 'koa-router';
import budgetController from './controllers/budget-controller';
import checkUser from '../../handlers/checkUser';
import Budget from './models/budget';

const router = new Router({ prefix: '/budget' });

router.post('/', checkUser(), budgetController.create).put('/', checkUser(), budgetController.update);

export { Budget };

export default router.routes();
