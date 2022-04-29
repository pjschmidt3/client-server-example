import { query } from '../db/utils';

export const findById = async productId => {
  const queryResult = await query('SELECT * from products WHERE ProductID = ?', [productId]);

  return queryResult.length > 0 ? queryResult[0] : null;
};

export const findAll = async () => {
  return query('SELECT * FROM products');
};