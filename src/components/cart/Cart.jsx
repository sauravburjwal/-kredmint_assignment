import React from 'react';

import './cart.css';
import CartItems from './CartItems';
import { useShopContext } from '../../context/shopContext';

const Cart = () => {
  const { totalQuantities, getTotalCartAmount, setShowCart } = useShopContext();

  return (
    <div className="cartWrapper">
      <div className="halfBackground"></div>
      <div className="cart">
        <h1> Shopping Cart</h1>
        <div className="cartItems">
          <CartItems />
        </div>
        {totalQuantities !== 0 ? (
          <div className="checkout">
            <p className="totalAmount">Total Amount: ${getTotalCartAmount()}</p>
            <div>
              <button
                onClick={() => {
                  setShowCart((prevState) => !prevState);
                }}
                className="ctaBtn"
              >
                Continue Shopping
              </button>
              <button onClick={() => {}} className="ctaBtn">
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
