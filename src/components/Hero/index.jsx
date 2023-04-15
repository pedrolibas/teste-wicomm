import { ContainerHero } from "./style";
import backgroundImage from "../../assets/heroImage.jpg";
import { Scroll } from "../Scroll";

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
      <button className="type7">CONFIRA</button>
      <Scroll />
    </ContainerHero>
  );
};
