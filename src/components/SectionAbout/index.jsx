import { ContainerSectionAbout } from "./style";
import logo from "../../assets/logos/logo2.svg";

export const SectionAbout = () => {
  return (
    <ContainerSectionAbout>
      <img src={logo} alt="" />
      <h3 className="type15 roboto">SOBRE A BLACK SKULL</h3>
      <p className="type6">
        A Black Skull USA é uma marca de suplementos alimentares com foco em
        atletas de alta performance. Nossa sede no Brasil está alocada em Embu
        das Artes – SP, com mais de 12.000 m² de área construída, com alta
        capacidade produtiva. Nossos produtos trabalham com as melhores
        matérias-primas do mercado e tem como principal característica maior
        concentração de insumos, que proporcionam níveis de pureza mais altos e
        por consequência otimizam a qualidade de nossos produtos.
      </p>
    </ContainerSectionAbout>
  );
};
