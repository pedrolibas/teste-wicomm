import styled from "styled-components";

export const ContainerCarouselPeople = styled.section`
  width: 100%;
  height: 461px;
  position: relative;

  .background {
    width: inherit;
    height: inherit;
    position: absolute;
  }

  h2 {
    font-style: italic;
    color: var(--white);

    position: absolute;
    top: 40px;
    left: 205px;

    margin: 0;
  }

  strong {
    color: var(--orange1);
  }

  ul {
    width: calc(100% - 205px - 205px);

    padding: 0 205px;

    position: absolute;
    top: 111px;

    .left {
      left: 141px;
    }

    .right {
      right: 141px;
    }
    li {
      img {
        width: 277px;
        height: 294px;
      }
    }
  }

  .redirect {
    color: var(--black1);

    padding: 14px 24px;

    background-color: var(--orange1);

    border: none;
    border-radius: 4px;

    position: relative;
    left: 571px;
    top: 437px;
  }
`;
