import { ContainerBlogCard } from "./style";

export const BlogCard = ({ img, created_at, content }) => {
  return (
    <ContainerBlogCard>
      <img src={img} alt="" />
      <div>
        <span className="type11">{created_at}</span>
        <h3 className="type14">{content}</h3>
        <button className="type3">LER MAIS</button>
      </div>
    </ContainerBlogCard>
  );
};
