import { ContainerHeader } from "./style";
import truckIcon from "../../assets/truck.svg";
import logo from "../../assets/logo.svg";
import magnifyingGlassIcon from "../../assets/MagnifyingGlass.svg";
import userIcon from "../../assets/User.svg";
import starIcon from "../../assets/star.svg";
import shoppingCartIcon from "../../assets/ShoppingCart.svg";

export const Header = () => {
  return (
    <ContainerHeader>
      <section>
        <h2 className="type1">FALE CONOSCO</h2>
        <div>
          <img src={truckIcon} alt="" />
          <p className="type2">
            FRETE GRÁTIS A PARTIR DE R$ 199,90 PARA TODO BRASIL
          </p>
        </div>
        <h3 className="type1">BLOG.BLACKSKULL</h3>
      </section>
      <nav>
        <img src={logo} alt="" className="logo" />
        <ul>
          <li className="type3">
            <a href="#category">CATEGORIAS</a>
          </li>
          <li className="type3">VESTUÁRIO</li>
          <li className="type3">OBJETIVOS</li>
          <li className="type3">PROMOÇÕES</li>
          <li className="type3">ATLETAS</li>
          <li className="type3">ASSINATURA</li>
        </ul>
        <form>
          <input type="text" placeholder="Buscar" />
          <img src={magnifyingGlassIcon} alt="" />
        </form>
        <div>
          <img src={userIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={shoppingCartIcon} alt="" />
        </div>
      </nav>
    </ContainerHeader>
  );
};
