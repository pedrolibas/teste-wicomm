import { ContainerProductCard } from "./style";
import starIcon from "../../assets/icons/star.svg";
import cartIcon from "../../assets/icons/ShoppingCart2.svg";

export const ProductCard = ({ img, name, price, installments }) => {
  return (
    <ContainerProductCard>
      <div>
        <img src={img} alt="" className="img-product" />
        <img src={starIcon} alt="" className="icon star" />
        <img src={cartIcon} alt="" className="icon cart" />
      </div>
      <h3 className="type9">{name}</h3>
      <h4 className="type10">{`R$ ${price}`}</h4>
      <span className="type11">{`ou ${installments}`}</span>
    </ContainerProductCard>
  );
};
