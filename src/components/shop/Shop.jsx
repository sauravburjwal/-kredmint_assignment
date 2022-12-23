import React from 'react';

import { PRODUCTS } from '../../assets/products';
import Product from './Product';

import './shop.css';

const Shop = () => {
  return (
    <div className="shop">
      <div className="products">
        {PRODUCTS.map((product, index) => (
          <Product data={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
