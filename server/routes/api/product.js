import express from 'express';
import * as productController from '../../controllers/product.controller';

/**
 * Ideally, routers should be kept concise and only be responsible
 * for accepting requests and returning the appropriate response.
 * Generally it's better to keep business/data access logic separate in a controller/service/etc.
 */

const router = express.Router();

/**
 * /api/product/<id>
 */
router.get('/:id', async (req, res) => {
  const productId = req.params.id;

  const product = await productController.findById(productId);

  return res.json(product);
});

/**
 * /api/product
 */
router.get('/', async (req, res) => {
  const products = await productController.findAll();

  return res.json(products);
});

export default router;