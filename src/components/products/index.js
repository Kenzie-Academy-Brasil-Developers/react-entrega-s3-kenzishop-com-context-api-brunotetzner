import { CardProduct } from "./style";
import { BsCart3 } from "react-icons/bs";
import { useContext } from "react";
import { CatalogoContext } from "../../providers/products";
import { CartContext } from "../../providers/cart";
export const RenderProduct = ({ type }) => {
  const { catalogoMenu } = useContext(CatalogoContext);
  const { cart, removeFromCart, addToCart } = useContext(CartContext);
  return (
    <CardProduct>
      {type === "catalogoMenu" &&
        catalogoMenu.map((product) => (
          <section className="container-product" key={product.id}>
            <h1>{product.nome}</h1>
            <img src={product.img} alt={product.name} />
            <div id="info">
              <span>{product.categoria}</span>
              <label>R$ {product.preço.toFixed(2)}</label>
              <button onClick={() => addToCart(product)}>
                add
                <BsCart3 />
              </button>
            </div>
          </section>
        ))}
      {type === "cart" &&
        cart.map((product) => (
          <section className="container-product" key={product.id}>
            <h1>{product.nome}</h1>
            <img src={product.img} alt={product.name} />
            <div id="info">
              <span>{product.categoria}</span>
              <label>R$ {product.preço.toFixed(2)}</label>
              <button onClick={() => removeFromCart(product)}>remove</button>
            </div>
          </section>
        ))}
    </CardProduct>
  );
};
