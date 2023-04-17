import { ContainerCircleCard } from "./style";

export const CircleCard = ({ img, name }) => {
  return (
    <ContainerCircleCard>
      <div>
        <img src={img} alt="" />
      </div>
      <h2 className="type1">{name}</h2>
    </ContainerCircleCard>
  );
};
