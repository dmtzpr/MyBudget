import Router from 'koa-router';
import auth from './auth';
import budget from './budget';

const router = new Router({ prefix: '/api' });

router.use(auth);
router.use(budget);

export default router.routes();
