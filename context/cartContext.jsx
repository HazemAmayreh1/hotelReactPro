import { createContext, useState, useEffect } from "react";
import { toast } from 'react-toastify';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [guestEmail, setGuestEmail] = useState(null);

  // Load cart from localStorage when component mounts
  useEffect(() => {
    const email = localStorage.getItem('guestEmail');
    setGuestEmail(email);

    if (email) {
      const storedCart = localStorage.getItem(`cart_${email}`);
      if (storedCart) {
        setCart(JSON.parse(storedCart)); // Load cart data from localStorage
      } else {
        setCart([]); // Set an empty cart if no stored cart is found
      }
    }
  }, [guestEmail]);

  // Sync cart changes with localStorage whenever the cart or guestEmail changes
  useEffect(() => {
    if (guestEmail) {
      localStorage.setItem(`cart_${guestEmail}`, JSON.stringify(cart));
    }
  }, [cart, guestEmail]);

  // Check if the user is authenticated
  const isAuthenticated = () => {
    const token = localStorage.getItem('guestEmail');
    return token ? true : false;
  };

  // Add a room to the cart with checks
  const addToCart = (room) => {
    if (!isAuthenticated()) {
      toast.error('You need to be logged in to add items to the cart');
      return;
    }

    // Check if the room is already booked
    if (room.status === true) {
      toast.error('This room is already booked and cannot be added to the cart');
      return;
    }

    // Restrict to only one room in the cart
    if (cart.length > 0) {
      toast.error('You can only add one room to the cart at a time. Please remove the current room to add another.');
      return;
    }

    // Check if the room is already in the cart
    const roomExists = cart.some(item => item.roomId === room.roomId);

    if (roomExists) {
      toast.error('This room is already in the cart');
    } else {
      setCart((prevCart) => [...prevCart, room]);
      toast.success('Room added to cart');
    }
  };

  // Remove a room from the cart by its roomId
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

  // Clear all items from the cart
  const clearCart = () => {
    setCart([]);
    toast.success('Cart cleared');
  };

  // Provide the cart, addToCart, removeFromCart, and clearCart functions as context values
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
