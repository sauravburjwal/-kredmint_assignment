import React from 'react';
import { BsCartDashFill } from 'react-icons/bs';
import { BsCartPlusFill } from 'react-icons/bs';
import { PRODUCTS } from '../../assets/products';

import { useShopContext } from '../../context/shopContext';

const CartItems = () => {
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useShopContext();
  const cartItem = (product) => {
    const { id, productName, price, productImage } = product;
    return (
      <div className="cartItem">
        <div className="cart_image">
          <img src={productImage} alt={productName} className="image" />
        </div>
        <div className="description">
          <div className="item_details">
            <p>
              <b>{productName}</b>
            </p>
            <p> Price: ${price}</p>
          </div>
          <div className="countHandler">
            <button
              onClick={() => removeFromCart(id)}
              className="cart_item_btn"
            >
              {' '}
              <BsCartDashFill />{' '}
            </button>
            <input
              value={cartItems[id]}
              onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            />
            <button onClick={() => addToCart(id)} className="cart_item_btn">
              {' '}
              <BsCartPlusFill />{' '}
            </button>
          </div>
        </div>
      </div>
    );
  };

  return PRODUCTS.map((product) =>
    cartItems[product.id] !== 0 ? cartItem(product) : '',
  );
};

export default CartItems;
