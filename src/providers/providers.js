import { CartProvider } from "./cart";
import { CatalogoProvider } from "./products";
export const Providers = ({ children }) => {
  return (
    <CartProvider>
      <CatalogoProvider>{children}</CatalogoProvider>
    </CartProvider>
  );
};
