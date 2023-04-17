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
    position: absolute;
    left: 0;
    right: 0;
    top: 437px;

    margin: auto; 

    width: 139px;
  }
`;
