import React from "react";

export interface CartProps {
  id: number;
  amount: number;
  price: number;
}
export interface CartContextParams {
  cart: CartProps[];
  setCart: (product: CartProps[]) => void;
}

export const CartContext = React.createContext<CartContextParams>({
  cart: [],
  setCart: () => {},
});
