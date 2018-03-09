import Router from 'koa-router';
import cashController from './controllers/cash-controller';
import Cash from './models/cash';

const router = new Router({ prefix: '/cash' });

router.get('/', cashController.get).post('/', cashController.create);

export { Cash };

export default router.routes();
