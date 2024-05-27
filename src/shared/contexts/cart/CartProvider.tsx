"use client";

import React from "react";

import { CartContext, CartProps } from "./CartContext";

export interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = React.useState<CartProps[]>(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  });

  React.useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const value = React.useMemo(() => ({ cart, setCart }), [cart, setCart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
