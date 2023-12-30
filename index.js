import { router } from './router.js';
import { createHttpServer } from './http-server.js';
import { getController, postController } from './controller.js';

const PORT = 3001;

router.addRoute('/example', 'GET', getController);
router.addRoute('/example', 'POST', postController);

createHttpServer(router.getRoutes(), PORT);
