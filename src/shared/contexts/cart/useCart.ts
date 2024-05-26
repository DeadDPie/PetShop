import React from "react";

import { CartContext } from "./CartContext";

export const useCart = () => React.useContext(CartContext);

