import { createContext, useState, useContext } from 'react';
import { PRODUCTS } from '../assets/products';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    let totalProduct = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
        totalProduct += cartItems[item];
      }
    }
    setTotalQuantities(totalProduct);
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
    totalQuantities,
    showCart,
    setShowCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export const useShopContext = () => useContext(ShopContext);
