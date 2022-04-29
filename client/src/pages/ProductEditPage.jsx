import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const ProductEditPage = () => {
  /**
   * We're able to access productId with useParams because
   * we defined the route with a productId parameter like this:
   * /product/:productId
   */
  const { productId } = useParams();

  /**
   * We use component state to store product data
   * once we've gotten it from our API
   */
  const [product, setProduct] = useState(null);

  /**
   * Anytime you have an async operation like an API call,
   * it should be inside a useEffect hook
   */
  useEffect(() => {

    // we have to define an async function here and then immediately call it because
    // react doesn't allow you to pass async functions directly to useEffect.
    // you can also do this with promise syntax if you want
    const loadProduct = async () => {
      const productResponse = await axios.get(`http://localhost:3002/api/product/${productId}`);

      setProduct(productResponse?.data);
    };

    loadProduct();
  }, [productId]);

  return product ? (
    <>
      <h1>Edit Product: </h1>

      <Link
        to="/"
        style={{
          float: 'left'
        }}>
        Back to list
      </Link>

      <br style={{ clear: 'both' }} />

      <form
        style={{
          marginTop: 30
        }}>
        <div className="form-group">
          <label
            className="control-label"
            htmlFor="Name">
            Name
          </label>
          <input
            className="form-control"
            name="Name"
            id="Name"
            type="text"
            value={product?.Name}
            onChange={e => {
              setProduct({
                ...product,
                Name: e.currentTarget.value
              });
            }}
          />
        </div>

        <div className="form-group">
          <label
            className="control-label"
            htmlFor="Price">
            Price
          </label>
          <input
            className="form-control"
            name="Price"
            id="Price"
            type="text"
            value={product?.Price}
            onChange={e => {
              setProduct({
                ...product,
                Price: e.currentTarget.value
              });
            }}
          />
        </div>
      </form>
    </>
  ) : null;
};

export default ProductEditPage;