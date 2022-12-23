import { createContext, useState, useContext } from 'react';

import { PRODUCTS } from '../assets/products';

export const ShopContext = createContext(null);

export const ShopContextProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [cartItem, setCartItem] = useState([]);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    let totalProduct = 0;
    totalAmount = cartItem.reduce(
      (acc, item) => (acc += item.quantity * item.price),
      0,
    );
    totalProduct = cartItem.reduce((acc, item) => (acc += item.quantity), 0);
    setTotalQuantities(totalProduct);
    return totalAmount;
  };
  const addToCart = (itemId) => {
    const item = PRODUCTS.find((p) => p.id === itemId);
    item.quantity = item.quantity + 1;
    const items = cartItem.filter((p) => p.id !== item.id);
    setCartItem([item, ...items]);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
  };

  const itemIncrement = (itemId) => {
    const item = PRODUCTS.find((p) => p.id === itemId);
    item.quantity = item.quantity + 1;
    const items = cartItem.map((p) => (p.id === item.id ? item : p));
    setCartItem([...items]);
  };

  const removeFromCart = (itemId) => {
    const item = PRODUCTS.find((p) => p.id === itemId);
    item.quantity = item.quantity - 1;
    const items = cartItem.map((p) => (p.id === item.id ? item : p));
    setCartItem([...items]);
  };

  const updateCartItemCount = (newAmount, itemId) => {
    const item = PRODUCTS.find((p) => p.id === itemId);
    item.quantity = newAmount;
    const items = cartItem.map((p) => (p.id === item.id ? item : p));
    setCartItem([...items]);
  };

  const contextValue = {
    cartItem,
    addToCart,
    itemIncrement,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    totalQuantities,
    showCart,
    setShowCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export const useShopContext = () => useContext(ShopContext);
