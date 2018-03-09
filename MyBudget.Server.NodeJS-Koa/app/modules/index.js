import Router from 'koa-router';
import auth from './auth';
import budget from './budget';
import cash from './cash';
import card from './card';
import expense from './expense';
import expenseCategory from './expense-category';

import checkUser from '../handlers/checkUser';

const router = new Router({ prefix: '/api' });

router.use(auth);
router.use(checkUser());
router.use(budget);
router.use(cash);
router.use(card);
router.use(expense);
router.use(expenseCategory);

export default router.routes();
