import Router from 'koa-router';
import auth from './auth';
import budget from './budget';
import cash from './cash';
import card from './card';
import expenseCategory from './expense-category';

const router = new Router({ prefix: '/api' });

router.use(auth);
router.use(budget);
router.use(cash);
router.use(card);
router.use(expenseCategory);

export default router.routes();
