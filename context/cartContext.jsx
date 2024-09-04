import { createContext, useState, useEffect } from "react";
import { toast } from 'react-toastify';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const isAuthenticated = () => {
    const token = localStorage.getItem('guestEmail'); 
    return token ? true : false;
  };

  const addToCart = (room) => {
    if (!isAuthenticated()) {
      toast.error('You need to be logged in to add items to the cart');
      return;
    }

    setCart((prevCart) => [...prevCart, room]);
  };

  const removeFromCart = (roomId) => {
    const updatedCart = cart.filter(item => item.roomId !== roomId);
    if (cart.length === updatedCart.length) {
      console.log('No item removed, check if the id matches any item in the cart');
    } else {
      console.log('Item removed successfully');
    }
  
    setCart(updatedCart);  
  };
  
  
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
