import { ContainerSectionBenefits } from "./style";
import { StyledButton } from "../Button/style";
import packageIcon from "../../assets/BenefitsImage/package.svg";
import moneyIcon from "../../assets/BenefitsImage/money.svg";

export const SectionBenefits = () => {
  return (
    <ContainerSectionBenefits>
      <div>
        <h2 className="type12 roboto">
          GARANTA O <strong>FRETE GRÁTIS</strong>
        </h2>
        <StyledButton className="type3">CONSULTE</StyledButton>
        <img src={packageIcon} alt=""/>
      </div>
      <div>
        <h2 className="type12 roboto">
          SEU DINHEIRO<strong> DE VOLTA</strong>
        </h2>
        <StyledButton className="type3">ENTENDA</StyledButton>
        <img src={moneyIcon} alt=""/>
      </div>
    </ContainerSectionBenefits>
  );
};
