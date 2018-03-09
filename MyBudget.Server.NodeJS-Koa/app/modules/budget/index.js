import Router from 'koa-router';
import budgetController from './controllers/budget-controller';
import Budget from './models/budget';

const router = new Router({ prefix: '/budget' });

router
    .get('/', budgetController.get)
    .post('/', budgetController.create)
    .put('/', budgetController.update);

export { Budget };

export default router.routes();
