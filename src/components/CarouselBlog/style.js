import styled from "styled-components";

export const ContainerCarouselBlog = styled.section`
  width: 100%;
  height: 540px;

  background: linear-gradient(180deg, var(--dark3) 0%, var(--black1) 101.48%);

  .carousel-header {
    width: calc(100% - 56px - 56px);
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 41px 56px 25px 56px;

    h3 {
      color: var(--white);
    }
    strong {
      color: var(--orange1);
    }

    button{
      height: 40px;
      width: 127px;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
