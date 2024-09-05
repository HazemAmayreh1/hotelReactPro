import { createContext, useState, useEffect } from "react";
import { toast } from 'react-toastify';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [guestEmail, setGuestEmail] = useState(null);

  useEffect(() => {
    const email = localStorage.getItem('guestEmail');
    setGuestEmail(email);

    if (email) {
      const storedCart = localStorage.getItem(`cart_${email}`);
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      } else {
        setCart([]); 
      }
    }
  }, [guestEmail]);

  useEffect(() => {
    if (guestEmail) {
      localStorage.setItem(`cart_${guestEmail}`, JSON.stringify(cart));
    }
  }, [cart, guestEmail]);

  const isAuthenticated = () => {
    const token = localStorage.getItem('guestEmail');
    return token ? true : false;
  };

  const addToCart = (room) => {
    if (!isAuthenticated()) {
      toast.error('You need to be logged in to add items to the cart');
      return;
    }

  
    if (room.status === true) {
      toast.error('This room is already booked and cannot be added to the cart');
      return;
    }

    const roomExists = cart.some(item => item.roomId === room.roomId);

    if (roomExists) {
      toast.error('This room is already in the cart');
    } else {
      setCart((prevCart) => [...prevCart, room]);
      toast.success('Room added to cart');
    }
  };

  const removeFromCart = (roomId) => {
    const updatedCart = cart.filter(item => item.roomId !== roomId);
    if (cart.length === updatedCart.length) {
      console.log('No item removed, check if the id matches any item in the cart');
    } else {
      console.log('Item removed successfully');
      toast.success('Room removed from cart');
    }
  
    setCart(updatedCart);  
  };

  const clearCart = () => {
    setCart([]);  
    toast.success('Cart cleared');
  };
  
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
