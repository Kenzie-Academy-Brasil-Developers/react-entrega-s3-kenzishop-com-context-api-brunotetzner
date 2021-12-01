import { createContext, useState } from "react";
export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const removeFromCart = (item) => {
    const newCart = cart.filter((itemOnCart) => itemOnCart.id !== item.id);
    setCart(newCart);
  };
  const addToCart = (item) => {
    const ids = cart.map((product) => product.id);
    if (!ids.includes(item.id)) {
      setCart([...cart, item]);
    }
  };
  const finalPrice = cart.reduce(
    (acumulador, item) => acumulador + item.preço,
    0
  );
  return (
    <CartContext.Provider
      value={{ cart, setCart, removeFromCart, addToCart, finalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};
