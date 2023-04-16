import { dataBlog } from "../../utils/data";
import { BlogCard } from "../BlogCard";
import { ListProducts } from "../ListProducts";
import { ContainerCarouselBlog } from "./style";

export const CarouselBlog = () => {
  return (
    <ContainerCarouselBlog>
      <div className="carousel-header">
        <h3 className="type15">
          CONFIRA O <strong>NOSSO BLOG</strong>
        </h3>
        <button className="type7">Ler Todos</button>
      </div>
      <ListProducts>
        {dataBlog.map(elem => (
          <BlogCard
            img={elem.img}
            created_at={elem.created_at}
            content={elem.content}
          />
        ))}
      </ListProducts>
    </ContainerCarouselBlog>
  );
};
