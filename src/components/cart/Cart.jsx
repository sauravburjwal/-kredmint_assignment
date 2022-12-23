import React from 'react';

import { useShopContext } from '../../context/shopContext';
import './cart.css';
import CartItems from './CartItems';
const Cart = () => {
  const { totalQuantities, getTotalCartAmount, setShowCart } = useShopContext();

  return (
    <div className="cart-wrapper">
      <div className="half_background"></div>
      <div className="cart">
        <h1> Shopping Cart</h1>
        <div className="cart_items">
          <CartItems />
        </div>
        {totalQuantities !== 0 ? (
          <div className="checkout">
            <p className="total_amount">
              {' '}
              Total Amount: ${getTotalCartAmount()}{' '}
            </p>
            <div>
              <button
                onClick={() => {
                  setShowCart((prevState) => !prevState);
                }}
                className="cta_btn"
              >
                {' '}
                Continue Shopping{' '}
              </button>
              <button onClick={() => {}} className="cta_btn">
                Checkout
              </button>
            </div>
          </div>
        ) : (
          <p className="empty">Cart is Empty</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
