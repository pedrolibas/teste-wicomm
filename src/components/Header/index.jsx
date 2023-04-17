import { ContainerHeader } from "./style";
import truckIcon from "../../assets/icons/truck.svg";
import logo from "../../assets/logos/logo.svg";
import magnifyingGlassIcon from "../../assets/icons/MagnifyingGlass.svg";
import userIcon from "../../assets/icons/User.svg";
import starIcon from "../../assets/icons/star.svg";
import shoppingCartIcon from "../../assets/icons/ShoppingCart.svg";

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
          <li className="type3">
            <a href="#release">VESTUÁRIO</a>
          </li>
          <li className="type3">
            <a href="#objective">OBJETIVOS</a>
          </li>
          <li className="type3">
            <a href="#promotion">PROMOÇÕES</a>
          </li>
          <li className="type3">
            <a href="#people">ATLETAS</a>
          </li>
          <li className="type3">
            <a href="#benefits">ASSINATURA</a>
          </li>
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
