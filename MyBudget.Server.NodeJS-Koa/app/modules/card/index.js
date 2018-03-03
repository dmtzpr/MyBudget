import Router from 'koa-router';
import cardController from './controllers/card-controller';
import checkUser from '../../handlers/checkUser';
import Card from './models/card';

const router = new Router({ prefix: '/cards' });

router
    .get('/', checkUser(), cardController.get)
    .post('/', checkUser(), cardController.create)
    .delete('/:id', checkUser(), cardController.delete);

export { Card };

export default router.routes();
