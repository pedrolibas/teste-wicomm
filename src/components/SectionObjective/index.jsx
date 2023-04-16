import { ContainerSectionObjective } from "./style";
import imgObjective1 from "../../assets/objective1.png";
import imgObjective2 from "../../assets/objective2.png";
import imgObjective3 from "../../assets/objective3.png";
import imgObjective4 from "../../assets/objective4.png";

export const SectionObjective = () => {
  return (
    <ContainerSectionObjective>
      <h2 className="type15">OBJETIVOS</h2>
      <ul>
      <li>
        <img src={imgObjective1} alt="" />
        <div>
          <h3 className="type3">GANHO DE MASSA</h3>
        </div>
      </li>
      <li>
        <img src={imgObjective2} alt="" />
        <div>
          <h3 className="type3">ENERGIA</h3>
        </div>
      </li>
      <li>
        <img src={imgObjective3} alt="" />
        <div>
          <h3 className="type3">RECUPERAÇÃO MUSCULAR</h3>
        </div>
      </li>
      <li>
        <img src={imgObjective4} alt="" />
        <div>
          <h3 className="type3">EMAGRECIMENTO</h3>
        </div>
      </li>
      </ul>
    </ContainerSectionObjective>
  );
};
