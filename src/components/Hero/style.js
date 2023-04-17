import styled from "styled-components";

export const ContainerHero = styled.section`
  width: 100%;
  height: 548px;
  position: relative;

  img {
    width: inherit;
    height: inherit;

    position: absolute;

    object-fit: cover;
  }

  h2 {
    width: 551px;

    color: var(--white);

    position: absolute;
    top: 130px;
    left: 155px;
  }
  strong {
    color: var(--orange1);
  }

  p {
    width: 349px;

    color: var(--white);

    position: absolute;
    top: 278px;
    left: 155px;
  }

  button {
    position: absolute;
    top: 370px;
    left: 155px;
  }

  .scroll {
    position: absolute;
    top: 510px;
    left: 0;
    right: 0;

    margin: auto;
  }
`;
