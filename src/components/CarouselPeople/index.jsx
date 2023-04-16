import { ContainerCarouselPeople } from "./style";
import backgroundImg from "../../assets/backgroudPeople.png";
import { ListProducts } from "../ListProducts";
import { dataPeople } from "../../utils/data";
import { StyledButton } from "../Button/style";

export const CarouselPeople = () => {
  return (
    <ContainerCarouselPeople>
      <img src={backgroundImg} alt="" className="background" />
      <h2 className="type12">
        CONHEÇA A TROPA <strong>BLACK SKULL</strong>
      </h2>
      <ListProducts>
        {dataPeople.map(elem => (
          <li>
            <img src={elem.img} />
          </li>
        ))}
      </ListProducts>
      <StyledButton className="type7 redirect">VER TODOS</StyledButton>
    </ContainerCarouselPeople>
  );
};
