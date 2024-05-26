"use client";

import React from "react";

import { CartContext } from "./CartContext";

export interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = React.useState<number[]>([]);

  const value = React.useMemo(() => ({ cart, setCart }), [cart, setCart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
