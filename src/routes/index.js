import { Router } from 'express';
import filesRoutes from './files.routes.js';

const router = Router();

router.get('/', (req, res) => {
    res.send('Bienvenido al API')
});

router.use('/files', filesRoutes );

export default router;