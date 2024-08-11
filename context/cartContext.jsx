import { createContext, useState } from "react";
import { sampleCart } from "../sampleCart";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(sampleCart);

  const addToCart = (room) => {
    setCart([...cart, room]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
