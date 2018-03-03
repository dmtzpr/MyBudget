import Router from 'koa-router';
import cashController from './controllers/cash-controller';
import checkUser from '../../handlers/checkUser';
import Cash from './models/cash';

const router = new Router({ prefix: '/cash' });

router.get('/', checkUser(), cashController.get).post('/', checkUser(), cashController.create);

export { Cash };

export default router.routes();
