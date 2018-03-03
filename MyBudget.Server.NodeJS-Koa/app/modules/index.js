import Router from 'koa-router';
import auth from './auth';
import budget from './budget';
import cash from './cash';
import card from './card';

const router = new Router({ prefix: '/api' });

router.use(auth);
router.use(budget);
router.use(cash);
router.use(card);

export default router.routes();
