import express from 'express';
import productRouter from './api/product';

/**
 * Top level router
 *
 * Includes child routers for each business object
 *
 * i.e. all product routes go in productRouter and get added with:
 *  router.use('/api/product', productRouter)
 */
const router = express.Router();

router.use('/api/product', productRouter);

export default router;