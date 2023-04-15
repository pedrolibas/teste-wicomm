import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { ListProducts } from "../../components/ListProducts";
import { dataTypeProducts } from "../../utils/data";
import { CircleCard } from "../../components/CircleCard";

import { ContainerHome } from "./style";

export const Home = () => {
  return (
    <ContainerHome>
      <Header />
      <Hero />
      <section className="list-type">
        <ListProducts>
          {dataTypeProducts.map(elem => (
            <CircleCard img={elem.img} name={elem.name} />
          ))}
        </ListProducts>
      </section>
    </ContainerHome>
  );
};
