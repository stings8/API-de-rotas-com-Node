import Router from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RoutingController from './app/controllers/RoutingController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.use(authMiddleware);
routes.put('/users', UserController.update);
routes.get('/routing', RoutingController.store);

export default routes;
