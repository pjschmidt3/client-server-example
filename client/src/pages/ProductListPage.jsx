import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

const ProductListPage = () => {
  /**
   * We use component state to store product data
   * once we've gotten it from our API
   */
  const [products, setProducts] = useState([]);

  /**
   * Anytime you have an async operation like an API call,
   * it should be inside a useEffect hook
   */
  useEffect(() => {

    // we have to define an async function here and then immediately call it because
    // react doesn't allow you to pass async functions directly to useEffect.
    // you can also do this with promise syntax if you want
    const loadProducts = async () => {
      const productResponse = await axios.get('http://localhost:3002/api/product');

      setProducts(productResponse.data);
    };

    loadProducts();
  }, []);

  return (
    <>
      <h1>Home Page - Products</h1>

       <table className="table table-striped table-responsive">
         <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th></th>
          </tr>
         </thead>
         <tbody>
         {products.map(product => (
           <tr>
             <td>{product.ProductID}</td>
             <td>{product.Name}</td>
             <td>${product.Price.toFixed(2)}</td>
             <td>
               <Link to={`/products/${product.ProductID}`}>
                 Edit
               </Link>
             </td>
           </tr>
         ))}
         </tbody>
       </table>
    </>
  );
};

export default ProductListPage;