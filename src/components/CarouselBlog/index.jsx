import { ListProducts } from "../ListProducts";
import { ContainerCarouselBlog } from "./style";

export const CarouselBlog = () => {
  return (
    <ContainerCarouselBlog>
      <div>
        <h3 className="type15">
          CONFIRA O <strong>NOSSO BLOG</strong>
        </h3>
        <button className="type7">Ler Todos</button>
      </div>
      <ListProducts></ListProducts>
    </ContainerCarouselBlog>
  );
};
