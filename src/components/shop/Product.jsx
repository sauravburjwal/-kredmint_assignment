import React from 'react';
import { Link } from 'react-router-dom';

import { useShopContext } from '../../context/shopContext';

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItem } = useShopContext();

  const cartItemCount = cartItem.find((item) => item.id === id)?.quantity;
  return (
    <div className="product">
      <Link to={`/product/${id}`}>
        <div className="productImage">
          <img src={productImage} alt={productName} className="image" />
        </div>
      </Link>
      <div className="productDetails">
        <button className="addToCartBtn" onClick={() => addToCart(id)}>
          + Add {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
        <p className="productName">
          <b>{productName}</b>
        </p>
        <p className="productPrice"> ${price}</p>
      </div>
    </div>
  );
};

export default Product;
