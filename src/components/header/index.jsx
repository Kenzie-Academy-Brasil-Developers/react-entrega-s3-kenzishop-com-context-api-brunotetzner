import { HeaderStyled } from "./style";
import { useHistory } from "react-router";
import { RiHome4Fill } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";

export const HeaderStore = ({ type }) => {
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
        <button onClick={backToStore}>
          <RiHome4Fill />
        </button>
      )}
    </HeaderStyled>
  );
};
