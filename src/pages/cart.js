import { RenderProduct } from "../components/products";
import { HeaderStore } from "../components/header";
export const CardPage = () => {
  return (
    <>
      <HeaderStore type="cart" />
      <RenderProduct type="cart" />;
    </>
  );
};
