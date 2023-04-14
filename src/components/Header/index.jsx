import { ContainerHeader } from "./style";
import truckIcon from "../../assets/truck.svg";

export const Header = () => {
  return (
    <ContainerHeader>
      <section>
        <h2>FALE CONOSCO</h2>
        <div>
          <img src={truckIcon} alt="" />
          <p>FRETE GRÁTIS A PARTIR DE R$ 199,90 PARA TODO BRASIL</p>
        </div>
        <h3>BLOG.BLACKSKULL</h3>
      </section>
      <nav></nav>
    </ContainerHeader>
  );
};
