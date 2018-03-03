import Router from 'koa-router';
import auth from './auth';
import budget from './budget';
import cash from './cash';

const router = new Router({ prefix: '/api' });

router.use(auth);
router.use(budget);
router.use(cash);

export default router.routes();
