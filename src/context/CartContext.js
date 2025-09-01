// src/context/CartContext.js
import React, { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Load cart from local storage on initial render
  const [cartItems, setCartItems] = useState(() => {
    try {
      const storedCartItems = localStorage.getItem('cartItems');
      return storedCartItems ? JSON.parse(storedCartItems) : [];
    } catch (error) {
      console.error("Failed to parse cart items from localStorage", error);
      return [];
    }
  });

  // Save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    // --- FIX FOR THE NOTIFICATION ---
    // Securely get the item's name for the notification, with a fallback.
    const itemName = item.name || item.domain || 'Item';

    setCartItems(prevItems => [...prevItems, { ...item, id: item.id || Date.now() }]);
    
    // Use the secured itemName for a clean notification.
    toast.success(`${itemName} has been added to your cart!`);
  };

  const removeFromCart = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
    toast.error("Item removed from cart.");
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;