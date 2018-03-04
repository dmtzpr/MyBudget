import Router from 'koa-router';
import cardController from './controllers/card-controller';
import checkUser from '../../handlers/checkUser';
import checkCard from './handlers/check-card';
import Card from './models/card';

const router = new Router({ prefix: '/cards' });

router
    .get('/', checkUser(), cardController.get)
    .post('/', checkUser(), cardController.create)
    .param('id', checkCard())
    // .put('/')
    .delete('/:id', checkUser(), cardController.delete);

export { Card };

export default router.routes();
