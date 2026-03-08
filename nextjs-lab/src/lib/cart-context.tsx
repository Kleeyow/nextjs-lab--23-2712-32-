'use client';

import { createContext, useContext, useState, ReactNode } from "react";

// Define a type for cart items
interface CartItem {
  id: number;
  name: string;
  price: number;
}

// Define the context type
interface CartContextType {
  items: CartItem[];
  total: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
}

// Create the context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider component
export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (item: CartItem) => setItems(prev => [...prev, item]);
  const removeItem = (id: number) => setItems(prev => prev.filter(i => i.id !== id));
  const total = items.reduce((sum, i) => sum + i.price, 0);

  return (
    <CartContext.Provider value={{ items, total, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use the cart
export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside a CartProvider");
  return context;
}