"use client";

import React from "react";

export interface CartContextParams {
  cart: number[];
  setCart: (product: number[]) => void;
}

export const CartContext = React.createContext<CartContextParams>({
  cart: [],
  setCart: () => {},
});
