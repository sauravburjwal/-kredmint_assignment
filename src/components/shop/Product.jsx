import React from 'react';
import { Link } from 'react-router-dom';

import { useShopContext } from '../../context/shopContext';

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useShopContext();

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <Link to={`/product/${id}`}>
        <div className="product_image">
          <img src={productImage} alt={productName} className="image" />
        </div>
      </Link>
      <div className="product_details">
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
          + Add {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
        <p className="product_name">
          <b>{productName}</b>
        </p>
        <p className="product_price"> ${price}</p>
      </div>
    </div>
  );
};

export default Product;
