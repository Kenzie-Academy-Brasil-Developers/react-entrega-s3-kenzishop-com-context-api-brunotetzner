import { HeaderStyled } from "./style";
import { useHistory } from "react-router";
import { RiHome4Fill } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../../providers/cart";
export const HeaderStore = ({ type }) => {
  const { finalPrice } = useContext(CartContext);
  const history = useHistory();
  const goToCart = () => history.push("/cart");
  const backToStore = () => history.push("/");

  return (
    <HeaderStyled>
      <h1>Selaria Safira</h1>
      {type === "catalogoMenu" ? (
        <button onClick={goToCart}>
          <p>Carrinho</p>
          <BsCart3 />
        </button>
      ) : (
        <div id="button-and-price">
          <span>
            Subtotal: <p>R${finalPrice.toFixed(2)}</p>
          </span>
          <button onClick={backToStore}>
            <RiHome4Fill />
          </button>
        </div>
      )}
    </HeaderStyled>
  );
};
