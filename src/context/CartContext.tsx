/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, ReactNode } from "react";

interface CartItem {
  id: number;
  model: string;
  quantity: number;
  image: string;
  brand: string;
  dis_price: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: number) => void;
  updateCartQuantity: (itemId: number, amount: number) => void; // Add this line
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      } else {
        return [...prevCart, item];
      }
    });
  };

  const removeFromCart = (itemId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const updateCartQuantity = (itemId: number, amount: number) => {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      );
    });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateCartQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
