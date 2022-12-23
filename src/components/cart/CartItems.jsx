import React from 'react';
import { BsCartDashFill } from 'react-icons/bs';
import { BsCartPlusFill } from 'react-icons/bs';

import { useShopContext } from '../../context/shopContext';

const CartItems = () => {
  const { cartItem, itemIncrement, removeFromCart, updateCartItemCount } =
    useShopContext();
  const CartItem = (product, key) => {
    const { id, productName, price, productImage, quantity } = product;
    return (
      <div className="cartItem" key={key}>
        <div className="cartImage">
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
            <button onClick={() => removeFromCart(id)} className="cartItemBtn">
              <BsCartDashFill />
            </button>
            <input
              value={quantity}
              onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            />
            <button onClick={() => itemIncrement(id)} className="cartItemBtn">
              <BsCartPlusFill />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return cartItem.map((product, key) =>
    product.quantity > 0 ? CartItem(product, key) : '',
  );
};

export default CartItems;
