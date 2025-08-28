// src/context/CartContext.js
import React, { useState, createContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (domain) => {
    // Prevent adding duplicates
    if (!cartItems.find(item => item.domain === domain.domain)) {
      setCartItems(prevItems => [...prevItems, domain]);
      alert(`${domain.domain} has been added to your cart!`);
    } else {
      alert(`${domain.domain} is already in your cart.`);
    }
  };

  const removeFromCart = (domainName) => {
    setCartItems(prevItems => prevItems.filter(item => item.domain !== domainName));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;