import * as express from 'express';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('Mundo');
});

export default router;