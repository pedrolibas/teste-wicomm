import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { ListProducts } from "../../components/ListProducts";
import { dataReleaseProducts, dataTypeProducts } from "../../utils/data";
import { CircleCard } from "../../components/CircleCard";

import { ContainerHome } from "./style";
import { ProductCard } from "../../components/ProductCard";
import { Scroll } from "../../components/Scroll";
import { CarouselPeople } from "../../components/CarouselPeople";
import { CarouselBlog } from "../../components/CarouselBlog";
import { SectionObjective } from "../../components/SectionObjective";
import { SectionBenefits } from "../../components/SectionBenefits";

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
      <section className="list-release">
        <h2 className="type15">LANÇAMENTOS</h2>
        <ListProducts>
          {dataReleaseProducts.map(elem => (
            <ProductCard
              img={elem.img}
              name={elem.name}
              price={elem.price}
              installments={elem.installments}
            />
          ))}
        </ListProducts>
        <Scroll />
      </section>
      <CarouselPeople />
      <section className="list-promotion">
        <h2 className="type15">PROMOÇÕES</h2>
        <ListProducts>
          {dataReleaseProducts.map(elem => (
            <ProductCard
              img={elem.img}
              name={elem.name}
              price={elem.price}
              installments={elem.installments}
            />
          ))}
        </ListProducts>
        <Scroll />
      </section>
      <CarouselBlog />
      <SectionObjective />
      <SectionBenefits />
    </ContainerHome>
  );
};
