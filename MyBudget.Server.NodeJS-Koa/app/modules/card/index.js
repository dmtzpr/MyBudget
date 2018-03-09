import Router from 'koa-router';
import cardController from './controllers/card-controller';
import checkCard from './handlers/check-card';
import Card from './models/card';

const router = new Router({ prefix: '/cards' });

router
    .get('/', cardController.get)
    .post('/', cardController.create)
    .param('id', checkCard())
    .put('/:id', cardController.update)
    .delete('/:id', cardController.delete);

export { Card };

export default router.routes();
