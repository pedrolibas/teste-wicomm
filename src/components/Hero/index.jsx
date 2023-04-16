import { ContainerHero } from "./style";
import backgroundImage from "../../assets/heroImage.jpg";
import { Scroll } from "../Scroll";
import { StyledButton } from "../Button/style";

export const Hero = () => {
  return (
    <ContainerHero>
      <img src={backgroundImage} alt="" />
      <h2 className="type5 roboto">
        AJUDANDO VOCÊ A TER <strong>MAIS PERFORMACE</strong>
      </h2>
      <p className="type6">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna
      </p>
      <StyledButton className="type7">CONFIRA</StyledButton>
      <Scroll />
    </ContainerHero>
  );
};
