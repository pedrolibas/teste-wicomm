import { CircleCard } from "../../components/CircleCard";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { ContainerHome } from "./style";

export const Home = () => {
  return (
    <ContainerHome>
      <Header />
      <Hero />
      <ul>
        <CircleCard />
      </ul>
    </ContainerHome>
  );
};
