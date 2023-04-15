import styled from "styled-components";

export const ContainerHero = styled.section`
  width: 100%;
  height: 548px;
  position: relative;

  img {
    width: inherit;
    height: inherit;

    position: absolute;
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
    padding: 14px 24px;

    background-color: var(--orange1);

    border: none;
    border-radius: 4px;

    position: absolute;
    top: 370px;
    left: 155px;

    cursor: pointer;
  }

  .scroll {
    position: absolute;
    top: 510px;
    left: 570px;
  }
`;
