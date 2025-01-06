import { Router } from "./modules/Router/Router";
import { QueryProvider } from "./shared/contexts";
import { CartProvider } from "./shared/contexts/cart";
import { LikedProvider } from "./shared/contexts/liked";

export const App = () => {
  return (
    <QueryProvider>
      <LikedProvider>
        <CartProvider>
          <Router />
        </CartProvider>
      </LikedProvider>
    </QueryProvider>
  );
};
