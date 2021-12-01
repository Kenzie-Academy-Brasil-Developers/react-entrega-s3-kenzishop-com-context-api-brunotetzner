import { RenderProduct } from "../components/products";
import { HeaderStore } from "../components/header";
export const HomePage = () => {
  return (
    <>
      <HeaderStore type="catalogoMenu" />
      <RenderProduct type="catalogoMenu" />;
    </>
  );
};
